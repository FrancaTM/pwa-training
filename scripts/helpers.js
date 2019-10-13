// SAFARI
// manually unregister service workers
navigator.serviceWorker
  .getRegistrations()
  .then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister().then(unregistered => console.log(unregistered));
      // registration.unregister();
    }
  })
  .catch(function err(err) {
    console.log("Service Worker registration failed: ", err);
  });

// view cached resources
// CACHE_NAME
const cacheName = "cache-v1";

caches.open(cacheName).then(cache => {
  cache.keys().then(requests => {
    console.log(requests);
  });
});

// clear caches via console
caches.open(cacheName).then(cache => {
  cache.keys().then(keys => {
    keys.forEach((request, index, array) => {
      cache.delete(request);
    });
  });
});
