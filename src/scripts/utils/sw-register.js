// Register service worker and push notification
const swRegister = async () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('../sw.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
				return registration;
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	} else {
		console.log('ServiceWorker belum didukung browser ini.');
	}
};

export default swRegister;
