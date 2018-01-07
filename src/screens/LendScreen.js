import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, Text, View, TouchableOpacity, } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
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

	getTopLoanBarJSX()
	{
		return(
			<View style={styles.topContainer}>
				<View style={[styles.avatarContainer, {marginLeft: 25,}]}>
					<Image style={styles.imageAvatar} source={require('../../images/20664038_10158962015225136_6191620256789104695_n.jpg')}/>
					<Text style={styles.titleTopText}>FROM</Text>
				</View>
				<View>
					<Image style={styles.imageLogo} source={require('../../images/lendyoologoshadow.png')}/>
				</View>
				<View style={[styles.avatarContainer, {marginRight: 25,}]}>
					<Image style={styles.imageAvatar} source={require('../../images/22179904_10212243801302792_6096409457610505771_o.jpg')}/>
					<Text style={styles.titleTopText}>TO</Text>
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
		return (
		<View style={styles.mainContainer}>

			{this.getTopLoanBarJSX()}

			<View style={styles.photoContainer}>
				<Text style={styles.titleText}>photo</Text>
			</View>

			<View style={{ alignItems: 'center', }}>
				<View style={styles.formElemRow01}>
					<Text style={styles.descText}>Return date</Text>
				</View>
				<View style={styles.formElemRow02}>
					<TextInput style={styles.formTextInput} underlineColorAndroid="transparent" value="12/12/2018"/>
				</View>
			</View>

			<View>
				<TouchableOpacity>
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

		topContainer: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'stretch',
		},
		avatarContainer: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		imageAvatar: {
			width: 70,
			height: 70,
			borderRadius: 35,
			marginTop: 15,
		},
		titleTopText: {
			margin: 10,
		},

		imageLogo: {
			marginTop: 15,
			width: 90,
			height: 90,
			resizeMode: 'contain',
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