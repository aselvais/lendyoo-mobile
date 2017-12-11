import React from 'react';
import {StyleSheet} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class AboutScreen extends AbstractScreen
{
	getTitle()
	{
		return 'AboutScreen';
	}
}

const styles = StyleSheet.create({
});

export default AboutScreen;