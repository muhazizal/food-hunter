const StylesHelper = {
	init({ stylesText, shadowRoot }) {
		const styleContainer = document.createElement('style');
		styleContainer.type = 'text/css';

		if (typeof stylesText === 'string') {
			styleContainer.appendChild(document.createTextNode(stylesText));
		}

		if (typeof stylesText === 'object') {
			stylesText.forEach((styles) => {
				styleContainer.appendChild(document.createTextNode(styles));
			});
		}

		shadowRoot.appendChild(styleContainer);
	},
};

export default StylesHelper;
