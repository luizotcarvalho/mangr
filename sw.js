self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mngr').then(function(cache) {
      return cache.addAll([
        '/mngr/',
        '/mngr/index.html',

        '/mngr/app/storage.js',
        '/mngr/app/task-details.js',
        '/mngr/app/task.js',
        '/mngr/app/tasks.js',
        '/mngr/app/app.js',

        '/mngr/assets/css/core/global.css',
        '/mngr/assets/css/core/reset.css',
        '/mngr/assets/css/core/typo.css',
        '/mngr/assets/css/core/variables.css',
        '/mngr/assets/css/helpers/animations.css',
        '/mngr/assets/css/helpers/flex.css',
        '/mngr/assets/css/helpers/properties.css',
        '/mngr/assets/css/helpers/responsive.css',
        '/mngr/assets/css/components/box.css',
        '/mngr/assets/css/components/buttons.css',
        '/mngr/assets/css/components/forms.css',
        '/mngr/assets/css/components/header.css',
        '/mngr/assets/css/components/icons.css',
        '/mngr/assets/css/components/task-details.css',
        '/mngr/assets/css/components/task.css',
        '/mngr/assets/css/components/tasks.css',
        '/mngr/assets/css/containers/my-tasks.css',

        '/mngr/assets/imgs/user.jpg',
        '/mngr/assets/imgs/mountains.jpg',

        '/mngr/assets/icons/add.svg',
        '/mngr/assets/icons/attachment.svg',
        '/mngr/assets/icons/branch.svg',
        '/mngr/assets/icons/calendar.svg',
        '/mngr/assets/icons/caret.svg',
        '/mngr/assets/icons/check.svg',
        '/mngr/assets/icons/circle.svg',
        '/mngr/assets/icons/close.svg',
        '/mngr/assets/icons/config.svg',
        '/mngr/assets/icons/hamburguer.svg',
        '/mngr/assets/icons/heart.svg',
        '/mngr/assets/icons/more.svg',
        '/mngr/assets/icons/search.svg',
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