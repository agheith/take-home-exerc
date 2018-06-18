import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Apple } from 'styled-icons/fa-brands/Apple';
import { connect } from 'react-redux';
import { signin } from '../actions';

class Header extends Component {

	render() {
		return (
			<div>
				<Nav>
					<Apple size='24' color='white' css='margin: 10px 20px'/>
					<Title>Coding Challenge, a simple application that has a user login and transitions to a greeting page.</Title>
					{(this.props.signedIn) ? <StyledLink to='/'>Sign Out</StyledLink> : null }
				</Nav>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { signedIn: state.signinReducer.signedIn };
}

export default connect(mapStateToProps, { signin })(Header);

const Nav = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  background-color: #333333;

  @media (max-width: 700px) {
    max-height: 44px;
  }
`;

const Title = styled.p`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 100;

  @media (max-width: 850px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-align: center;
  color: #fff;
  font-size: 14px;
  position: absolute;
  right: 0;
  margin: 15px;
  font-family: sans-serif;
  font-weight: 100;
  transition: 0.3s;

  &:hover {
    color: grey;
    opacity: 1;
  }
  &:link {
    text-decoration: none;
  }
`;
