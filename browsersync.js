import browserSyncPkg from 'browser-sync';
const browserSync = browserSyncPkg.create();

browserSync.init({
  server: './www/'
});