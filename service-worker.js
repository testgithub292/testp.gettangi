self.addEventListener('install', function (event) {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', function (event) {
  // Simple cache strategy or skip this part
});
