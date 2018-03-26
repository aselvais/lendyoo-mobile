import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Button, Content, Icon, Root, Toast,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Lstorage from "../libs/Lstorage";

/**
 *
 */
class LoginScreen extends AbstractScreen
{
	state = {
		email: '',
		password: '',
		showToast: false,
	};

	/**
	 *
	 */
	componentDidMount()
	{
		Lstorage.retrieveLoginParams().then(
			p => {
				if (p !== false)
				{
					return this.setState({
						email: p.login,
						password: p.password
					}, () => this.clickLogin());
				}
				return false;
			},
			err => console.log(err),
		);
	}


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
	 */
	clickLogin()
	{
		let {navigation} = this.props;
		let username = this.state.email; // 'arnaud@antidot.ca';
		let password = this.state.password; //'test';
		this.user.authenticate(username, password).then(
			(d) =>
			{
				if (d)
				{
					// Toast.show({ text: 'Success', position: 'top', buttonText: 'OK', type: 'success', });
					Lstorage.saveLoginParams(username, password);
					navigation.navigate('Home');
				}
				else
				{
					Toast.show({
						text: 'Wrong username or password',
						position: 'top',
						buttonText: 'OK',
						type: 'danger',
					});
				}
			},
			(err) =>
			{
				console.log('ERROR');
				console.log(err);
			}
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		return (
			<Root>
				<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={styles.linearGradient}>
					<View style={styles.mainContainer}>
						<ScrollView contentContainerStyle={{flexGrow: 1}}>

							<View style={styles.mainContainer}>

								<View style={styles.genericRow}>
									<View style={styles.titleContainer}>
										<Text style={styles.titleTxt}>{this.getTitle()}</Text>
									</View>
								</View>

								<View style={[styles.formElemContainer, styles.bottomLine]}>
									<View style={styles.formElemRow01}><Text style={styles.formText}>Email</Text></View>
									<View style={styles.formElemRow02}><TextInput style={styles.formTextInput}
																				  underlineColorAndroid="transparent"
																				  onChangeText={(email) => this.setState({email})}
																				  value={this.state.email}/></View>
								</View>

								<View style={styles.formElemContainer}>
									<View style={styles.formElemRow01}><Text
										style={styles.formText}>Password</Text></View>
									<View style={styles.formElemRow02}><TextInput
										style={styles.formTextInput}
										secureTextEntry={true}
										underlineColorAndroid="transparent"
										onChangeText={(password) => this.setState({password})}
										value={this.state.password}/></View>
								</View>

								<View style={styles.genericRow}>
									<TouchableOpacity onPress={() => this.clickLogin()}>
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
									<View style={[styles.orContainer, {
										flex: 2,
										height: '50%',
										borderBottomWidth: 2,
										borderBottomColor: '#000'
									}]}></View>
									<View style={[styles.orContainer, {flex: 1}]}><Text style={styles.orText}>OR</Text></View>
									<View style={[styles.orContainer, {
										flex: 2,
										height: '50%',
										borderBottomWidth: 2,
										borderBottomColor: '#000'
									}]}></View>
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
									<TouchableOpacity>
										<View style={[styles.buttonOrangeContainer, styles.buttonDarkBlueContainer]}>
											<Text style={styles.buttonTextColor}>Login with Google</Text>
										</View>
									</TouchableOpacity>
								</View>

							</View>
						</ScrollView>
					</View>
				</LinearGradient>
			</Root>
		);
	}

}

const _localStyles = StyleSheet.create(
	{
		mainContainer: {
			paddingTop: 20,
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
			backgroundColor: 'rgba(0,0,0,0)',
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
			backgroundColor: 'rgba(0,0,0,0)',
		},


	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LoginScreen;