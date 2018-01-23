import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';
import {observer} from 'mobx-react/native';

import Todo from '../models/Todo';

/**
 *
 */
@observer
class AboutScreen extends AbstractScreen
{
	getTitle()
	{
		return 'AboutScreen';
	}

	render()
	{

		return (
			<View>
				<View>
					<Text>{Todo.title}</Text>
				</View>
				<TouchableHighlight onPress={ () => Todo.title = 'ANOTHER TITLE!!!!!!!!' }>
				<View>
					<Text>Change Title</Text>
				</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
});

export default AboutScreen;