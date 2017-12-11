import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class HistoryScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'Loans history',
		drawerIcon: ({ tintColor }) => (<Icon name='list' />),
	};

	getTitle()
	{
		return 'HistoryScreen';
	}
}

const styles = StyleSheet.create({
});

export default HistoryScreen;