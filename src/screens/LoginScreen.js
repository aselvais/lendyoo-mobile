import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Content, Icon} from 'native-base';

/**
 *
 */
class LoginScreen extends AbstractScreen
{
	getTitle()
	{
		return 'Login';
	}

}

const _localStyles = StyleSheet.create(
	{
		mainContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},
	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LoginScreen;