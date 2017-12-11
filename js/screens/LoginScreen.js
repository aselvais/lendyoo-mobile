import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class LoginScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'Login',
		drawerIcon: ({ tintColor }) => (<Icon name='log-in' />),
	};

	getTitle()
	{
		return 'LoginScreen';
	}
}

const styles = StyleSheet.create({
});

export default LoginScreen;