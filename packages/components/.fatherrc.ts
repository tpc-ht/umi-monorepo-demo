import {defineConfig} from 'father';
import {IFatherConfig} from "father/dist/types";

export default defineConfig({
  esm: {
    input: 'src',
    output: 'dist',
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ]
  ]
} as IFatherConfig);
