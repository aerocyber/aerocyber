var cookies = document.cookie;
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('uname');
if (myParam != null) {
	alert("Hello, " + myParam);
}
console.log(cookies);
