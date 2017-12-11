import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 *
 */
class AbstractScreen extends Component
{

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'AbstractScreen';
	}

	/**
	 *
	 * @returns {XML}
	 */
	render()
	{
		return (
			<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={styles.linearGradient}>
				<View style={styles.container}>
					<Text style={styles.titleText}>
						{ this.getTitle() }
					</Text>
				</View>
			</LinearGradient>
		);
	};

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},
	titleText: {
		backgroundColor: 'transparent',
	},
});

export default AbstractScreen;