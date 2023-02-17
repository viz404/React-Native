export function validateEmail(email) {
	const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return emailRegEx.test(email);
}

export function validatePassword(password) {
	const passRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/;
	return passRegEx.test(password);
}
