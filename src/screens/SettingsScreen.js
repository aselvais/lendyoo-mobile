import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class SettingsScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'Settings',
		drawerIcon: ({ tintColor }) => (<Icon name='settings' />),
	};

	getTitle()
	{
		return 'SettingsScreen';
	}
}

const styles = StyleSheet.create({
});

export default SettingsScreen;