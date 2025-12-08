import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  appType: 'mpa',
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'html/index.html'),
        about: resolve(__dirname, 'html/about.html'),
        auth: resolve(__dirname, 'html/auth.html'),
        blog: resolve(__dirname, 'html/blog.html'),
        challenges: resolve(__dirname, 'html/challenges.html'),
        community: resolve(__dirname, 'html/community.html'),
        contact: resolve(__dirname, 'html/contact.html'),
        dashboard: resolve(__dirname, 'html/dashboard.html'),
        monetization: resolve(__dirname, 'html/monetization.html'),
        news: resolve(__dirname, 'html/news.html'),
        notifications: resolve(__dirname, 'html/notifications.html'),
        profile: resolve(__dirname, 'html/profile.html'),
        search: resolve(__dirname, 'html/search.html'),
        sponsors: resolve(__dirname, 'html/sponsors.html'),
        tutorials: resolve(__dirname, 'html/tutorials.html'),
        write: resolve(__dirname, 'html/write.html')
      }
    }
  },
  server: {
    port: 3000
  }
});