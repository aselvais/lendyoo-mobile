import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Content, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

/**
 *
 */
class SignupScreen extends AbstractScreen
{

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'SING UP';
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		return (
			<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={styles.linearGradient}>
				<View style={styles.mainContainer}>

				<View style={styles.mainContainer}>

				<View style={styles.genericRow}>
					<View style={styles.titleContainer}>
						<Text style={styles.titleTxt}>{this.getTitle()}</Text>
					</View>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={styles.fbBtnContainer}>
							<View style={styles.fbBtnCol01}>
								<Icon name="logo-facebook" style={{fontSize: 40, color: '#FFFFFF'}}/>
							</View>
							<View style={styles.fbBtnCol02}>
								<Text style={styles.fbBtnText}>Sign up with{"\n"}Facebook</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('underlineBtnTouch Touched !')}>
						<View style={styles.underlineBtnContainer}>
							<Text style={styles.underlineBtnText}>Use other log{"\n  "}in methods</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>HAVE AN ACCOUNT? LOG IN</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>
				</View>
			</LinearGradient>
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

	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};
export default SignupScreen;