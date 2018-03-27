import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Root, Toast, Item, Picker,} from 'native-base';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

/**
 *
 */
class SignupScreen extends AbstractScreen
{
	state = {
		fname: this.user.fname,
		lname: this.user.lname,
		gender: this.user.gender,
		email: this.user.email,
		dateOfBirth: this.user.dateOfBirth,
	};

	/**
	 *
	 * @param props
	 */
	constructor(props)
	{
		super(props);
	}

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'SIGN UP';
	}

	/**
	 *
	 * @param label
	 * @param placeholder
	 * @param bottomline
	 * @returns {*}
	 */
	getFormElement(label = 'email', placeholder = 'email', bottomline = true, k = '')
	{
		let stl = [styles.formElemContainer];
		if (bottomline)
		{
			stl.push(styles.bottomLine);
		}
		return (
			<View style={stl}>
				<View style={styles.formElemRow01}><Text style={styles.formText}>{label}</Text></View>
				<View style={styles.formElemRow02}>
					<TextInput style={styles.formTextInput} onChangeText={(v) => this.syncValues(k, v)}
							   underlineColorAndroid="transparent" value={placeholder}/>
				</View>
			</View>
		);
	}

	/**
	 *
	 * @param type
	 */
	callPicker(type = 'date')
	{
		switch (type)
		{
			case 'date':
				this.props.navigation.navigate('CalendarScreen', { mindate: new Date(2018-100,0,1) });
				break;
			case 'image':
				this.props.navigation.navigate('CameraScreen');
				break;
		}
	}

	/**
	 *
	 * @param value
	 */
	onValueChange(value = '')
	{
		this.syncValues('gender', value);
	}

	/**
	 *
	 * @param k
	 * @param v
	 */
	syncValues(k, v)
	{
		let vv = {};
		vv[k] = v;
		this.setState(vv, () => this.user[k] = v);
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
									<TouchableOpacity onPress={() => this.callPicker('image')}>
										<View style={styles.imageContainer}>
											<Image style={styles.imageAvatar}
												   source={require('../../images/contactDefault.png')}/>
										</View>
									</TouchableOpacity>
									<View style={styles.titleContainer}>
										<Text style={styles.titleTxtSettings}>{this.getTitle()}</Text>
									</View>
								</View>

								<View style={styles.genericRow}>
									{this.getFormElement('First Name', this.state.fname, true, 'fname')}
									{this.getFormElement('Last Name', this.state.lname, true, 'lname')}

									<View style={[styles.formElemContainer, styles.bottomLine]}>
										<View style={styles.formElemRow01}><Text
											style={styles.formText}>Gender</Text></View>
										<View style={styles.formElemRow02}>
											<Picker
												textStyle={[styles.formTextInput, {
													paddingTop: 10,
													paddingLeft: 0,
													marginLeft: 0
												}]}
												iosHeader="Select one"
												mode="dropdown"
												selectedValue={this.state.gender}
												onValueChange={(d) => this.onValueChange(d)}>
												<Item label="Male" value="M"/>
												<Item label="Female" value="F"/>
												<Item label="Other" value="O"/>
											</Picker>
										</View>
									</View>

									{this.getFormElement('E-mail', this.state.email, true, 'email')}

										<View style={[styles.formElemContainer]}>
											<View style={styles.formElemRow01}><Text style={styles.formText}>
												Date of birth
											</Text></View>
											<View style={styles.formElemRow02}>
												<DatePicker
													style={{ width: '100%', }}
													date={this.state.dateOfBirth}
													mode="date"
													placeholder="select date"
													format="DD/MM/YYYY"
													minDate="1900-01-01"
													maxDate="2018-01-01"
													confirmBtnText="Confirm"
													cancelBtnText="Cancel"
													onDateChange={(date) => {this.setState({dateOfBirth: date})}}
													showIcon={false}
													customStyles={{
														dateInput: {
															flex: 1,
															height: 40,
															borderWidth: 0,
															borderColor: 'rgba(0,0,0,0)',
															alignItems: 'center',
															justifyContent: 'center'
														},
													}}
												/>
											</View>
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
					</View>
				</LinearGradient>
			</Root>
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
			flex: 1,
			alignItems: 'flex-end',
			paddingRight: 10,
		},
		fbBtnCol02: {
			flex: 2,
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
			color: '#767676',
			backgroundColor: 'rgba(0,0,0,0)',
			borderColor: 'rgba(0,0,0,0)',
			borderWidth: 1,
		},


	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default SignupScreen;