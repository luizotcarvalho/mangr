self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mngr').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',

        '/app/storage.js',
        '/app/task-details.js',
        '/app/task.js',
        '/app/tasks.js',
        '/app/app.js',

        '/assets/css/core/global.css',
        '/assets/css/core/reset.css',
        '/assets/css/core/typo.css',
        '/assets/css/core/variables.css',
        '/assets/css/helpers/animations.css',
        '/assets/css/helpers/flex.css',
        '/assets/css/helpers/properties.css',
        '/assets/css/helpers/responsive.css',
        '/assets/css/components/box.css',
        '/assets/css/components/buttons.css',
        '/assets/css/components/forms.css',
        '/assets/css/components/header.css',
        '/assets/css/components/icons.css',
        '/assets/css/components/task-details.css',
        '/assets/css/components/task.css',
        '/assets/css/components/tasks.css',
        '/assets/css/containers/my-tasks.css',

        '/assets/imgs/user.jpg',
        '/assets/imgs/mountains.jpg',

        '/assets/icons/add.svg',
        '/assets/icons/attachment.svg',
        '/assets/icons/branch.svg',
        '/assets/icons/calendar.svg',
        '/assets/icons/caret.svg',
        '/assets/icons/check.svg',
        '/assets/icons/circle.svg',
        '/assets/icons/close.svg',
        '/assets/icons/config.svg',
        '/assets/icons/hamburguer.svg',
        '/assets/icons/heart.svg',
        '/assets/icons/more.svg',
        '/assets/icons/search.svg',
      ])
      .then(function() {
        self.skipWaiting();
      });
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});