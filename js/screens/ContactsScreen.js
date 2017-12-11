import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class ContactsScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'Contacts',
		drawerIcon: ({ tintColor }) => (<Icon name='contacts' />),
	};

	getTitle()
	{
		return 'ContactsScreen';
	}
}

const styles = StyleSheet.create({
});

export default ContactsScreen;