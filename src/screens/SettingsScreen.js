import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class SettingsScreen extends AbstractScreen
{
	getTitle()
	{
		return 'SettingsScreen';
	}
}

const styles = StyleSheet.create({
});

export default SettingsScreen;