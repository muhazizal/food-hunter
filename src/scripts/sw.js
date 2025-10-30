importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

workbox.core.skipWaiting()
workbox.core.clientsClaim()

// Precache
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [])

// Only cache specific asset types, not APIs
workbox.routing.registerRoute(
	({ request }) =>
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'image',
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'assets-cache',
	})
)

// Let all other requests (like API calls) go straight to the network
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly())
