import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

/**
 *
 */
class AbstractScreen extends Component
{

	/**
	 *
	 * @type {{drawerLabel: string, drawerIcon: function({tintColor: *}): *}}
	 */
	static navigationOptions = {
		drawerLabel: 'AbstractScreen',
		drawerIcon: ({ tintColor }) => (<Icon name='home' />),
	};

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
					<TouchableHighlight onPress={() => this.props.navigation.navigate('DrawerToggle')}>
					<Text style={styles.titleText}>
						{ this.getTitle() }
					</Text>
					</TouchableHighlight>
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