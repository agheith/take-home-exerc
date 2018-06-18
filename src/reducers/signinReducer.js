import { SIGN_AUTH, SIGNIN_ERROR } from '../actions/types';

const INITIAL_STATE = {
	signedIn: '',
	errorMessage: ''
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {

	case SIGN_AUTH:
		return { ...state, signedIn: action.payload };

	case SIGNIN_ERROR:
		return { ...state, errorMessage: action.payload };

	default:
		return state;
	}
}
