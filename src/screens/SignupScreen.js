import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class SignupScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'Signup',
		drawerIcon: ({ tintColor }) => (<Icon name='body' />),
	};

	getTitle()
	{
		return 'SignupScreen';
	}
}

const styles = StyleSheet.create({
});

export default SignupScreen;