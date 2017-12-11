import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class LoginScreen extends AbstractScreen
{
	getTitle()
	{
		return 'LoginScreen';
	}
}

const styles = StyleSheet.create({
});

export default LoginScreen;