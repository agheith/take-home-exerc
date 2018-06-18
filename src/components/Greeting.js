import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signin } from '../actions';

class Greeting extends Component {

	componentDidMount() {
		this.notSignedIn();
	}

	notSignedIn() {
		if(!this.props.signedIn) {
			this.props.history.push('/');
			console.log('must sign in');
		}
	}

	render() {
		return (
			<div>
				<div>
					<H1>Welcome To The Greeting Page</H1>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { signedIn: state.signinReducer.signedIn };
}


export default connect(mapStateToProps, { signin })(Greeting);


const H1 = styled.h1`
	color: #676761;
	font-family: sans-serif;
	font-weight: 100;
	text-align: center;
	margin-top: 50px;
`;
