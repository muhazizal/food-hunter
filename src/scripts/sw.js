importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
	ignoreURLParametersMatching: [/.*/],
});

workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate());
