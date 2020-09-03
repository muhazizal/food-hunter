const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const subscribe = document.querySelector('#subscribe');

emailInput.addEventListener('focusin', () => {
	emailInput.style.boxShadow = '0 0 3pt 2pt #03dac6';
});

emailInput.addEventListener('focusout', () => {
	emailInput.style.boxShadow = 'none';
});

subscribe.addEventListener('click', event => {
	if (emailInput.value === '' || emailInput.value === null || emailInput.value.indexOf('@') === -1) {
		emailInput.style.boxShadow = '0 0 3pt 2pt #cf6679';

		emailError.innerText = 'Your email not valid';
		emailError.style.padding = '0.8rem 1.2rem';
		emailError.style.backgroundColor = '#cf6679';
		emailError.style.color = 'black';
		emailError.style.borderRadius = '0.5rem';
		emailError.style.display = 'block';
		emailError.style.gridRow = '2 / 3';
		emailError.style.gridColumn = '1 / 2';

		event.preventDefault();
		return;
	}

	emailError.style.display = 'none';
	emailInput.style.boxShadow = 'none';

	alert(`Hello ${emailInput.value}`);
	emailInput.value = '';

	event.preventDefault();
});
