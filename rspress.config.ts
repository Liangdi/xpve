import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'PVE 调整指南',
  description: '针对 PVE 的优化调整指南',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/Liangdi/xpve' },
    ],
    footer:{
      message:"© 2024 Liangdi <a target='_blank' href='https://404.net.cn'>404</a> "
    }
  },
});
