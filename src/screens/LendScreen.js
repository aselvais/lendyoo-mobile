import React, {Component} from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon} from 'native-base';

/**
 *
 */
class LendScreen extends AbstractScreen
{
	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'Lend';
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		return (
		<View style={styles.mainContainer}>
			<View>
				<Text style={AbstractScreen._styles.titleText}>TO FROM</Text>
			</View>

			<View>
				<Text style={AbstractScreen._styles.titleText}>photo</Text>
			</View>

			<View>
				<Text style={AbstractScreen._styles.titleText}>Add desc</Text>
			</View>

			<View>
				<Text style={AbstractScreen._styles.titleText}>Button</Text>
			</View>
		</View>
		);
	}


}

const _localStyles = StyleSheet.create(
	{
		mainContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},

		container: {
			alignItems: 'stretch',
			justifyContent: 'center',
		},

	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LendScreen;