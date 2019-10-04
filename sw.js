const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/",
  "index.html",
  "styles/main.css",
  "scripts/main.js",
  "images/sample.jpg",
  "images/icon-192x192.png",
  "images/icon-512x512.png",
  "images/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  console.log("service worker install event");
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("activate event");
});

self.addEventListener("fetch", event => {
  console.log("fetch intercepted for: ", event.request.url);
  event.respondWith(
    // caches.match(event.request) || fetch(event.request);
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
