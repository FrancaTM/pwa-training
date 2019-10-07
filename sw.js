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

let debugMode = false;
debugMode
  ? console.log("debugMode ON - sw.js")
  : console.log("debugMode OFF - sw.js");

self.addEventListener("install", event => {
  debugMode ? console.log("service worker install event") : null;
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener("activate", event => {
  debugMode ? console.log("activate event") : null;
});

self.addEventListener("fetch", event => {
  debugMode ? console.log("fetch intercepted for: ", event.request.url) : null;
  event.respondWith(
    // caches.match(event.request) || fetch(event.request);
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
