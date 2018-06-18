import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signin, signout } from '../actions';

class Signin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			password: '',
			username: '',
		};
	}

	componentDidMount() {
		this.props.signout();
	}

	handleChangeInput = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		let { username, password } = this.state;
		const singinCredentials = {
			username,
			password
		};
		this.setState({
			username: '',
			password: ''
		});
		this.props.signin(singinCredentials, () => {
			this.props.history.push('/greeting')
		});
	}

	render() {

		let { username, password } = this.state;

		return (
			<div>
			  <FormContainer>
				  <SingInForm onSubmit={this.onSubmit}>
						<Invalid>{this.props.errorMessage}</Invalid>
						<FormTitle>Sign in</FormTitle>
					  <UserInput type="text" name="username" placeholder="Username" onChange={(e) => this.handleChangeInput(e)} />
					  <PasswordInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => this.handleChangeInput(e)} />
						{(username.length > 0 && password.length > 0) ? <FormSubmit type="submit" value="Sign In" /> : null}
					 </SingInForm>
				 </FormContainer>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.signinReducer.errorMessage };
}

export default connect(mapStateToProps, { signin, signout })(Signin);

const Invalid = styled.p`
	color: #E13247;
	font-family: sans-serif;
	font-weight: 100;
	display: flex;
	justify-content: center;
}
`;



const FormContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: groove;
  border-radius: 6px;
  border-color: #F2F2F2;
  padding: 70px;
  margin: 100px;

  @media (max-width: 700px) {
    margin: 50px 20px;
  }
`;


const SingInForm = styled.form`
  border-radius: 3px;
  width: 40%;
`;

const FormTitle = styled.h2`
  color: #676761;
  font-family: sans-serif;
  font-weight: 100;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const UserInput = styled.input`
  width: 100%;
  height: 30px;
  border-style: groove;
  border-radius: 6px;
  border-color: #F2F2F2;
  padding: 10px 20px;
  font-size: 18px;

  @media (max-width: 700px) {
    margin: auto;
    padding: 5px 20px;
    width: 100px;
  }
`;

const PasswordInput = styled.input.attrs({
	type: 'password',
})`
  width: 100%;
  height: 30px;
  border-style: groove;
  border-radius: 6px;
  border-color: #F2F2F2;
  padding: 10px 20px;
  font-size: 18px;

  @media (max-width: 700px) {
    margin: auto;
    padding: 5px 20px;
    width: 100px;
  }
`;

const FormSubmit = styled.input`
  font-size: 16px;
  margin: 16px;
  padding: 4px 16px;
  border: 2px solid #676761;
  border-radius: 3px;
  border-style: groove;
  width: 100%;
  height: 50px;

  @media (max-width: 700px) {
    margin: auto;
    padding: 5px 20px;
    width: 145px;
    border: 2px solid #676761;
    border-radius: 3px;
    border-style: groove;
  }
`;
