import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class LendScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'Lend item',
		drawerIcon: ({ tintColor }) => (<Icon name='add-circle' />),
	};

	getTitle()
	{
		return 'LendScreen';
	}
}

const styles = StyleSheet.create({
});

export default LendScreen;