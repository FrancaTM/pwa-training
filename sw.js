"use strict";

// CACHE_NAME
const cacheName = "cache-v1";
// urlsToCache
const resourcesToPrecache = [
  "/",
  "index.html",
  "/styles/main.css",
  "/scripts/main.js",
  "/images/sample.jpg",
  "images/icon-192x192.png",
  "images/icon-512x512.png",
  "images/apple-touch-icon.png",
  "example.json"
];

let debugMode = true;
debugMode
  ? console.log("debugMode ON - sw.js")
  : console.log("debugMode OFF - sw.js");

self.addEventListener("install", event => {
  // debugger;
  debugMode ? console.log("service worker install event") : null;

  self.skipWaiting();

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

self.addEventListener("push", event => {
  console.log("[Service Worker] Push received");
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = "Push Codelab";
  const options = {
    body: "yay it works",
    icon: "images/smiley.svg",
    badge: "images/sample.png"
  };
  // const body = "a body message";
  // const icon = "/images/smiley.svg";
  // const tag = "simple-push-example-tag";

  const notificationPromise = self.registration.showNotification(
    title,
    options
  );
  event.waitUntil(notificationPromise);
});

self.addEventListener("notificationclick", event => {
  console.log("[Service Worker] notification click received");

  event.notification.close();

  event.waitUntil(clients.openWindow("https://developers.google.com/web/"));
});
