import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon} from 'native-base';

/**
 *
 */
class LoginScreen extends AbstractScreen
{
	state = {
		email: 'name@example.com',
		password: 'Required',
	};

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'LOGIN';
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
					<View style={styles.titleContainer}>
						<Text style={styles.titleTxt}>{this.getTitle()}</Text>
					</View>
				</View>

				<View style={[styles.formElemContainer, styles.bottomLine]}>
					<View style={styles.formElemRow01}><Text style={styles.formText}>Email</Text></View>
					<View style={styles.formElemRow02}><TextInput style={styles.formTextInput} underlineColorAndroid="transparent" onChangeText={(text) => this.setState({text})} value={this.state.email}/></View>
				</View>

				<View style={styles.formElemContainer}>
					<View style={styles.formElemRow01}><Text style={styles.formText}>Password</Text></View>
					<View style={styles.formElemRow02}><TextInput style={styles.formTextInput} underlineColorAndroid="transparent" onChangeText={(text) => this.setState({text})} value={this.state.password}/></View>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>LOGIN</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.genericRow}>
					<View style={styles.titleContainer}>
						<Text style={styles.forgotText}>Forgot password?</Text>
					</View>
				</View>

				<View style={styles.orContainerMain}>
					<View style={[styles.orContainer, { flex: 2, height: '50%', borderBottomWidth: 2, borderBottomColor: '#000' }]}></View>
					<View style={[styles.orContainer, { flex: 1 }]}><Text style={styles.orText}>OR</Text></View>
					<View style={[styles.orContainer, { flex: 2, height: '50%', borderBottomWidth: 2, borderBottomColor: '#000'  }]}></View>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={[styles.buttonOrangeContainer, styles.buttonOrange2Container]}>
							<Text style={styles.buttonTextColor}>CREATE ACCOUNT</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={[styles.buttonOrangeContainer, styles.buttonBlueContainer]}>
							<Text style={styles.buttonTextColor}>Login with Facebook</Text>
						</View>
					</TouchableOpacity>
				</View>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => console.warn('fbBtn Touch Touched !')}>
						<View style={[styles.buttonOrangeContainer, styles.buttonDarkBlueContainer]}>
							<Text style={styles.buttonTextColor}>Login with Google</Text>
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
			flex: 3,
		},
		formTextInput: {
			height: 40,
			color: '#8C8C8C',
			/* borderColor: 'gray',
			borderWidth: 1, */
		},
		forgotText: {
			color: '#9A9A9A',
			fontSize: 25,
		},

		buttonOrange2Container: {
			backgroundColor: '#F59F00',
			padding: 20,
		},

		buttonBlueContainer: {
			backgroundColor: '#0086B3',
			padding: 20,
		},

		buttonDarkBlueContainer: {
			backgroundColor: '#27303B',
			padding: 20,
		},


		orContainerMain: {
			alignItems: 'stretch',
			flexDirection: 'row',
			justifyContent: 'center',
			marginLeft: 10,
			marginRight: 10,
		},
		orContainer: {
			alignItems: 'center',
		},
		orText: {
			color: '#000000',
			fontSize: 20,
		},




	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LoginScreen;