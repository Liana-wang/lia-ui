exports['style'] = require('../../components/style/index.less')

function pascalCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-(\w)/g, (m, n) => n.toUpperCase());
}

const req = require.context('../../components', true, /^\.\/[^_][\w-]+\/style\/index\.less$/);

req.keys().forEach(mod => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.less$/);
  if (match && match[1]) {
    exports[pascalCase(match[1])] = v;
  }
});


module.exports = require('../../components');
