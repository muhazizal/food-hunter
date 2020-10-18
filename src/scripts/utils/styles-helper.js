const StylesHelper = {
	init({ stylesText, shadowRoot }) {
		const styleContainer = document.createElement('style');
		styleContainer.type = 'text/css';
		styleContainer.appendChild(document.createTextNode(stylesText));

		shadowRoot.appendChild(styleContainer);
	},
};

export default StylesHelper;
