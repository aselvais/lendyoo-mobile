import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon} from 'native-base';
import Fromtobar from './components/Fromtobar';

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
	getPhotoContainerJSX()
	{
		return (
			<View style={{ alignItems: 'center', }}>
				<View style={styles.formElemRow01}>
					<Text style={styles.descText}>Return date</Text>
				</View>
				<View style={styles.formElemRow02}>
					<TextInput style={styles.formTextInput} underlineColorAndroid="transparent" value="12/12/2018"/>
				</View>
			</View>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		let { navigation } = this.props;
		return (
		<View style={styles.mainContainer}>
			<Fromtobar navigation={navigation}/>
			<View style={styles.photoContainer}>
				<Text style={styles.titleText}>photo</Text>
			</View>
			{this.getPhotoContainerJSX()}
			<View>
				<TouchableOpacity onPress={ () => navigation.navigate('LoanstatusScreen') }>
					<View style={styles.buttonOrangeContainer}>
						<Text style={styles.buttonTextColor}>SAVE LOAN</Text>
					</View>
				</TouchableOpacity>
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

		photoContainer: {
			flex: 1,
			backgroundColor: '#000',
			alignItems: 'stretch',
		},

		formElemRow01: {},
		descText: {
			color: '#000',
			fontSize: 20,
			paddingTop: 5,
		},

		formElemRow02: {},
		formTextInput: {
			width: AbstractScreen.width-100,
			textAlign: 'center',
			color: '#555',
			/* borderWidth: 1,
			borderColor: 'red', */
			margin: 5,
			padding: 0,
		},


	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LendScreen;