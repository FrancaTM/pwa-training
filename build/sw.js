/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "example.json",
    "revision": "9beeec22f938d81de1c87f78b0b5ab3c"
  },
  {
    "url": "example.txt",
    "revision": "06fcd0412cd4ef82591898d92308df1b"
  },
  {
    "url": "images/apple-touch-icon.png",
    "revision": "ed86f0b0f3a0474729265a920765b3b4"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "b8d185f8fc90663b586703cbc12f0959"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "67a1316944a2d461675ff1831c7d775a"
  },
  {
    "url": "images/sample.jpg",
    "revision": "e04f4b3259b569ca2761ac39ff39966d"
  },
  {
    "url": "images/smiley.svg",
    "revision": "0eed19c5c86cdb7cb81f16b5117837c0"
  },
  {
    "url": "index.html",
    "revision": "c319fdf3b718e829f1f1a99d93535280"
  },
  {
    "url": "manifest.json",
    "revision": "46e0d38e3bc0c1ff9dfef8bde8ecedcb"
  },
  {
    "url": "scripts/helpers.js",
    "revision": "9886ecd548647fad7ca0a1450ba49fed"
  },
  {
    "url": "scripts/main.js",
    "revision": "273d8034c22cc4e2163e0c24f522ae8c"
  },
  {
    "url": "styles/main.css",
    "revision": "d472cc812230b1c60c6272cf2ae4f022"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
