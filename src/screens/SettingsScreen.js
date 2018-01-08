import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput} from 'react-native';
import {Content, Icon} from 'native-base';

const {height, width} = Dimensions.get('window');

/**
 *
 */
class SettingsScreen extends AbstractScreen
{
	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'ACCOUNT & SETTINGS';
	}

	/**
	 *
	 * @param label
	 * @param placeholder
	 * @param bottomline
	 * @returns {*}
	 */
	getFormElement(label='email', placeholder='email', bottomline=true)
	{
		let stl = [styles.formElemContainer];
		if (bottomline)
		{
			stl.push(styles.bottomLine);
		}
		return (
			<View style={stl}>
				<View style={styles.formElemRow01}><Text style={styles.formText}>{label}</Text></View>
				<View style={styles.formElemRow02}><TextInput style={styles.formTextInput} underlineColorAndroid="transparent" value={placeholder}/></View>
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
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
			<View style={styles.mainContainer}>

				<View style={styles.genericRow}>
					<View style={styles.imageContainer}>
						<Image style={styles.imageAvatar} source={require('../../images/20664038_10158962015225136_6191620256789104695_n.jpg')}/>
					</View>
					<View style={styles.titleContainer}>
						<Text style={styles.titleTxtSettings}>{this.getTitle()}</Text>
					</View>
				</View>

				<View style={styles.genericRow}>
					{this.getFormElement('First Name', 'Raphael', true)}
					{this.getFormElement('Last Name', 'Thys', true)}
					{this.getFormElement('Gender', 'M', true)}
					{this.getFormElement('E-mail', 'rthys@gmail.com', true)}
					{this.getFormElement('Date of birth', '12/12/1912', true)}
				</View>

				<View style={styles.genericRow}>
					<View style={styles.titleContainer}>
						<Text style={styles.forgotText}>Log-out</Text>
					</View>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>SAVE</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>
			</ScrollView>
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

		imageContainer: {
			paddingTop: 15,
			alignItems: 'center',
		},
		imageAvatar: {
			width: 100,
			height: 100,
			borderRadius: 50,
		},
		titleTxtSettings: {
			paddingTop: 10,
			color: '#00B8EC',
			fontSize: 28,
		},

		genericRow: {
			flexDirection: 'column',
			alignItems: 'stretch',
		},

		fbBtnContainer: {
			alignSelf: 'stretch',
			alignItems: 'center',
			flexDirection: 'row',
			backgroundColor: '#0086B3',
			padding: 20,
			margin: 20,
		},
		fbBtnCol01: {
			flex:1,
			alignItems: 'flex-end',
			paddingRight: 10,
		},
		fbBtnCol02: {
			flex:2,
		},
		fbBtnText: {
			color: '#FFFFFF',
			fontSize: 20,
		},

		forgotText: {
			color: '#9A9A9A',
			fontSize: 20,
			textDecorationLine: 'underline',
		},

		underlineBtnContainer: {
			alignItems: 'center',
			alignSelf: 'center',
			width: '100%',
		},
		underlineBtnText: {
			alignItems: 'center',
			textDecorationLine: 'underline',
			fontSize: 25,
		},

		formElemContainer: {
			flexDirection: 'row',
			marginLeft: 10,
			marginRight: 10,
		},
		formElemRow01: {
			flex: 1,
			alignSelf: 'center',
		},
		bottomLine: {
			borderBottomWidth: 2,
			borderBottomColor: '#000',
		},
		formElemRow02: {
			flex: 3
		},
		formTextInput: {
			height: 40,
			color: '#8C8C8C',
			/* borderColor: 'gray',
			borderWidth: 1, */
		},


	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default SettingsScreen;