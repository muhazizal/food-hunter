importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')

workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [])

workbox.routing.registerRoute(
	({ request }) => ['script', 'style', 'image', 'font'].includes(request.destination),
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'static-assets',
	})
)

workbox.routing.registerRoute(
	({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
	new workbox.strategies.NetworkOnly()
)

workbox.routing.registerRoute(
	({ url }) => url.pathname.startsWith('/api'),
	new workbox.strategies.NetworkFirst({
		cacheName: 'api-cache',
		networkTimeoutSeconds: 3,
		plugins: [
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	})
)

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkOnly())
