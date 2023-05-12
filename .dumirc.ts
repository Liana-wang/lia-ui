import { defineConfig } from 'dumi';
import path from 'path';
import { version } from './package.json';

export default defineConfig({
  ssr: false,
  hash: true,
  crossorigin: {},
  outputPath: '_site',
  logo: '/assets/logo.png',
  favicons: ['/assets/logo.png'],
  resolve: {
    docDirs: [{ type: 'doc', dir: 'docs' }],
    atomDirs: [{ type: 'component', dir: 'components' }],
    codeBlockMode: 'passive',
  },
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
  ],
  define: {
    antdReproduceVersion: version,
  },
  alias: {
    'lia-ui/lib': path.join(process.cwd(), 'components'),
    'lia-ui/es': path.join(process.cwd(), 'components'),
    'lia-ui/icons': path.join(process.cwd(), 'components', 'icons'),
    'lia-ui': require.resolve('./.dumi/theme/oneui.js'),
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ]
  ],
  mfsu: false,
  themeConfig: {
    footer: 'Powered by lia-ui',
  },
  analytics: {
    ga_v2: 'UA-72788897-1',
  },
});
