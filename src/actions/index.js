export const signin = ({username, password}, callback) => dispatch => {
	if (username === 'admin' && password === 'admin123') {
		dispatch({ type: 'SIGN_AUTH', payload: { username, password } });
		localStorage.setItem('user', username);
		callback();
	} else {
		dispatch({ type: 'SIGNIN_ERROR', payload: 'Invalid username or password' });
		setTimeout(() => {
			dispatch({ type: 'SIGNIN_ERROR' });
		}, 5000);
	}
};

export const signout = () => {
	localStorage.removeItem('user');
	return {
		type: 'SIGN_AUTH',
		payload: ''
	};
};
