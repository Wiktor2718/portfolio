const scriptURL = 'https://script.google.com/macros/s/AKfycbzN6IjJqf_gfBr3WJ4LcayHAnknCKEE4FZTxakAbi8SsfB3P-xBySbiy2I2uk_gnqNwQw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
	e.preventDefault();

	form.reset();

	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => {
			msg.innerHTML = "Message Sent";
			setTimeout(() => { msg.innerHTML = "" }, 5000);
		})
		.catch((error) => {
			console.error('Error!', error.message);
			msg.innerHTML = "Failed to send message";
			setTimeout(() => { msg.innerHTML = "" }, 5000);
		});
});