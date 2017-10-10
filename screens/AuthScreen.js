import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
	componentDidMount() {
		this.props.facebookLogin();
		this.onAuthComplete(this.props);

		//Reset Facebook token to re-logIn
		//AsyncStorage.removeItem('fb_token');
	}

	//when the component is just about to re-render
	componentWillReceiveProps(nextProps) {
		this.onAuthComplete(nextProps);
	}

	//look at props, see if there's a token, and navigate user...
	//In other words, if they've already authenticated
	onAuthComplete(props) {
		if (props.token) {
			this.props.navigation.navigate('map');
		}
	}

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth }) {
	return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
