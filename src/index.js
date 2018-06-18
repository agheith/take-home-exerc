import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Signin from './components/Signin';
import Greeting from './components/Greeting';

const store = createStore(
	reducers,
	{
		signinReducer: { signedIn: localStorage.getItem('user') }
	},
	compose(
		applyMiddleware(reduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App>
				<Route path='/' exact component={Signin} />
				<Route path='/greeting' component={Greeting}/>
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
