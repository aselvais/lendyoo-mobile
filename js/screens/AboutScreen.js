import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class AboutScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'About',
		drawerIcon: ({ tintColor }) => (<Icon name='information-circle' />),
	};

	getTitle()
	{
		return 'AboutScreen';
	}
}

const styles = StyleSheet.create({
});

export default AboutScreen;