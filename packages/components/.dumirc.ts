import {defineConfig} from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {},
  npmClient: 'pnpm',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
