import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    '@rc-component/steps$': path.resolve('src'),
    '@rc-component/steps/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Steps',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
});