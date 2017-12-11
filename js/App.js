import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LandingScreen from "./screens/LandingScreen";

/**
 *
 */
export default class App extends React.Component
{
	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		return (
			<LandingScreen/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
