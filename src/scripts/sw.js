importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

workbox.core.skipWaiting()
workbox.core.clientsClaim()

// Cache app shell assets
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [])

// ✅ Only cache static assets (JS, CSS, images)
workbox.routing.registerRoute(
	({ request }) => ['script', 'style', 'image', 'font'].includes(request.destination),
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'static-assets',
	})
)

// ✅ Always fetch APIs directly from network (don’t cache)
workbox.routing.registerRoute(
	({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
	new workbox.strategies.NetworkOnly()
)

// ✅ Fallback for anything else
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly())
