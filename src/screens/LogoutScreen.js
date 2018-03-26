import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import Lstorage from "../libs/Lstorage";

/**
 *
 */
class LogoutScreen extends AbstractScreen
{

	/**
	 *
	 * @param props
	 */
	constructor(props)
	{
		super(props);
	}

	componentDidMount()
	{
		// replace this by a delete of the local storage data
		Lstorage.saveLoginParams('','');
		this.props.navigation.navigate('LandingScreen');
	}

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'Log-out';
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		return (
			<View style={{ flex: 1, justifyContent: 'space-between', }}>

				<View style={styles.titleContainer}>
					<Text style={styles.titleTxt}>Bye bye ...</Text>
				</View>
			</View>
		);
	}
}

const _localStyles = StyleSheet.create({
});
const styles = {...AbstractScreen._styles, ..._localStyles};
export default LogoutScreen;