const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('del');
const ts = require('gulp-typescript');
const merge2 = require('merge2');
const path = require('path');
const less = require('less');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const through2 = require('through2');
const webpack = require('webpack');
const fs = require('fs');
const { transform } = require('@svgr/core')

const tsConfig = ts.createProject('./tsconfig.json');
const ESDIR = './es';
const LIBDIR = './lib';

gulp.task('clean', () => {
  return clean(['lib']);
});

gulp.task('cleanEs', () => {
  return clean(['es']);
});

// 将Icons下的svg转换为react组件
function transformSVG(modules) {
  const svgr = gulp
    .src(['components/**/*.@(svg)'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        if (file.path.match(/(\/|\\)icons(\/|\\)svg(\/|\\).*\.svg$/)) {
          const cloneFile = file.clone();
          const content = file.contents.toString().replace(/^\uFEFF/, '');

          cloneFile.contents = Buffer.from(content);

          const cloneCssFile = cloneFile.clone();

          transform(
            cloneCssFile.contents.toString(),
            {
              icon: true,
              expandProps: 'end',
              exportType: 'named',
            },
          ).then(jsCode => {
            cloneCssFile.contents = Buffer.from(jsCode);
            cloneCssFile.path = cloneCssFile.path.replace(/\.svg$/, '.svg.js');
            this.push(cloneCssFile);
            next();
          })
        } else {
          next()
        }
      })
    )
    .pipe(babel(require('./getBabelConfig')(modules || false)))
    .pipe(tsConfig())
    .pipe(gulp.dest(modules === false ? ESDIR : LIBDIR));

  return svgr
}

// 编译less
function transformLess(lessContent, lessFilePath) {
  const cwd = process.cwd();
  const resolvedLessFile = path.resolve(cwd, lessFilePath);

  const lessOpts = {
    paths: [path.dirname(resolvedLessFile)],
    filename: resolvedLessFile,
    javascriptEnabled: true,
  };

  return less
    .render(lessContent, lessOpts)
    .then(result => postcss([autoprefixer]).process(result.css, { from: undefined }))
    .then(r => r.css);
}

// babel编译
function babelify(js, modules) {
  const babelConfig = require('./getBabelConfig')(modules || false);

  const stream = js.pipe(babel(babelConfig)).pipe(
    through2.obj(function z(file, encoding, next) {
      this.push(file.clone());
      if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
        const content = file.contents.toString(encoding);

        file.contents = Buffer.from(content.replace(/\.less/g, '.css'));
        file.path = file.path.replace(/index\.js/, 'css.js');
        this.push(file);
        next();
      } else {
        next();
      }
    })
  );

  return stream.pipe(gulp.dest(modules === false ? ESDIR : LIBDIR));
}

function compileFile(modules) {
  // 先将less复制一份，再编译为css
  const less = gulp
    .src(['components/**/*.less'])
    .pipe(
      through2.obj(function (file, encoding, next) {
        const cloneFile = file.clone();
        const content = file.contents.toString().replace(/^\uFEFF/, '');

        cloneFile.contents = Buffer.from(content);

        const cloneCssFile = cloneFile.clone();

        this.push(cloneFile);

        if (file.path.match(/(\/|\\)style(\/|\\)index\.less$/)) {
          transformLess(cloneCssFile.contents.toString(), cloneCssFile.path)
            .then(css => {
              cloneCssFile.contents = Buffer.from(css);
              cloneCssFile.path = cloneCssFile.path.replace(/\.less$/, '.css');
              this.push(cloneCssFile);
              next();
            })
            .catch(e => {
              console.error(e);
            });
        } else {
          next();
        }
      })
    )
    .pipe(gulp.dest(modules === false ? ESDIR : LIBDIR));

  // copy图片
  const assets = gulp
    .src(['components/**/*.@(png)'])
    .pipe(gulp.dest(modules === false ? ESDIR : LIBDIR));

  // 编译ts为js
  const tsResult = tsConfig.src().pipe(tsConfig());

  // babel
  const tsFilesStream = babelify(tsResult.js, modules);

  // 类型声明
  const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? ESDIR : LIBDIR));

  return merge2([less, tsFilesStream, tsd, assets]);
}

// 将组件less导出
function finalizeCompile() {
  if (fs.existsSync(path.join(__dirname, './lib'))) {
    const componentsPath = path.join(process.cwd(), 'components');
    let componentsLessContent = '';
    fs.readdir(componentsPath, (err, files) => {
      files.forEach((file) => {
        if (fs.existsSync(path.join(componentsPath, file, 'style', 'index.less'))) {
          componentsLessContent += `@import "../${path.posix.join(
            file,
            'style',
            'index.less',
          )}";\n`;
        }
      });
      fs.writeFileSync(
        path.join(process.cwd(), 'lib', 'style', 'components.less'),
        componentsLessContent,
      );
    });
  }
}

function dist(done) {
  const webpackConfig = require('./webpack.config.js');

  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (fs.existsSync(path.join(__dirname, './dist'))) {
      fs.writeFileSync(
        path.join(process.cwd(), 'dist', 'ui.less'),
        '@import "../lib/style/index.less";\n@import "../lib/style/components.less";',
      );
    }

    if (stats.hasErrors()) {
      (info.errors || []).forEach(error => {
        console.error(error);
      });
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    const buildInfo = stats.toString({
      colors: true,
      children: true,
      chunks: false,
      modules: false,
      chunkModules: false,
      hash: false,
      version: false,
    });
    console.log(buildInfo);

    done(0);
  });
}

gulp.task('finalize', done => {
  finalizeCompile()
  done();
});

gulp.task('svgrEs', () => {
  return transformSVG(false)
})

gulp.task('svgr', () => {
  return transformSVG('commonjs')
})

gulp.task('es', gulp.series(['cleanEs', 'svgrEs'], (done) => {
  console.log('Compile to es...');
  compileFile(false).on('finish', done);
}));

gulp.task('lib', gulp.series(['clean', 'svgr'], (done) => {
  console.log('Compile to js...');
  compileFile('commonjs').on('finish', done);
}));

gulp.task(
  'compile',
  gulp.series('es', 'lib', 'finalize')
);

gulp.task('dist', gulp.series(done => {
  dist(done);
}));

gulp.task('default', gulp.series('compile', 'dist'));
