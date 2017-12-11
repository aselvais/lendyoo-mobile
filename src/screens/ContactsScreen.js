import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class ContactsScreen extends AbstractScreen
{
	getTitle()
	{
		return 'ContactsScreen';
	}
}

const styles = StyleSheet.create({
});

export default ContactsScreen;