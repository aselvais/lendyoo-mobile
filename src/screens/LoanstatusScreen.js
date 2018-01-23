import React from 'react';
import {StyleSheet, Switch, Text, View, TextInput, TouchableOpacity, Image, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Loan from "../models/Loan";
import moment from 'moment';

/**
 *
 */
class LoanstatusScreen extends AbstractScreen
{

	/**
	 *
	 * @type {Loan}
	 */
	model = this.lendyooRegistry.loanCollection.getActiveModel();

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'LOAN STATUS';
	}

	/**
	 *
	 * @param val
	 * @param stateVarName
	 */
	onChangeTextInput(val, stateVarName)
	{
		let nState = {};
		this.model[stateVarName] = val;
		//nState[stateVarName] = val;
		//this.setState(nState);
	}

	/**
	 *
	 * @param label
	 * @param placeholder
	 * @param bottomline
	 * @returns {*}
	 */
	getFormElement(label='email', placeholder='email', stateVarName='', bottomline=true)
	{
		let stl = [styles.formElemContainer];
		if (bottomline)
		{
			stl.push(styles.bottomLine);
		}
		return (
			<View style={stl}>
				<View style={styles.formElemRow01}><Text style={styles.formText}>{label}</Text></View>
				<View style={styles.formElemRow02}><TextInput
					style={styles.formTextInput}
					underlineColorAndroid="transparent"
					onChangeText={(val) => this.onChangeTextInput(val, stateVarName)}
					value={this.model[stateVarName]}
					/></View>
			</View>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		let { navigation } = this.props;
		return (
			<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={AbstractScreen._styles.linearGradient}>
			<View style={styles.mainContainer}>
				<View style={{alignItems: 'center',}}>
					<Text style={styles.titleTxt}>{this.getTitle()}</Text>
				</View>

				<TouchableOpacity onPress={ () => navigation.navigate('ImagedetailScreen') }>
				<View style={styles.loanIemCol01}>
					<Image style={styles.imageAvatar} source={{uri: 'https://api.lendyou.io/api-v2/photo/getloanimage/' + this.model._id + '/150'}} />
				</View>
				</TouchableOpacity>

				<View style={{alignItems: 'center', marginLeft: 30, marginRight: 30, }}>
					{this.getFormElement('Object name', this.model.title, 'title', true)}
					{this.getFormElement('Object type', this.model.detail, 'detail', true)}

					<View style={styles.formElemContainer}>
						<View style={styles.formElemRow01}><Text style={styles.formText}>Loan end date</Text></View>
						<TouchableOpacity onPress={() => navigation.navigate('CalendarScreen') }>
						<View style={styles.formElemRow02}>
							<Text style={styles.formTextInput}>{moment(this.model.dateExpiration).format('DD/MM/YYYY')}</Text>
						</View>
						</TouchableOpacity>
					</View>

				</View>

				<View style={styles.reminderContainer}>
					<View style={{ padding: 10, }}>
						<Text style={styles.txtReminders}>Smart automatic reminders</Text>
					</View>
					<View style={{ padding: 10, }}>
						<Switch/>
					</View>
				</View>

				<View style={{alignItems: 'center',}}>
					<Text style={styles.txtMoreinfo}>Access to location and agenda is required (why?)</Text>
				</View>


				<View>
					<TouchableOpacity onPress={ () => navigation.navigate('HistoryScreen') }>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>SAVE LOAN</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			</LinearGradient>
		);
	}
}


const _localStyles = StyleSheet.create({

	imageAvatar: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},

	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},

	titleTxt: {
		color: '#00B8EC',
		paddingTop: 20,
		fontSize: 28,
		backgroundColor: 'rgba(0,0,0,0)',
	},

	txtReminders: {
		color: '#000',
		fontSize: 17,
		backgroundColor: 'rgba(0,0,0,0)',
	},

	txtMoreinfo: {
		color: '#9A9A9A',
		fontSize: 19,
		flexWrap: 'wrap',
		marginLeft: 60,
		marginRight: 60,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
	},

	formElemContainer: {
		flexDirection: 'row',
		marginLeft: 10,
		marginRight: 10,
	},
	formElemRow01: {
		flex: 3,
		alignSelf: 'center',
	},
	bottomLine: {
		borderBottomWidth: 2,
		borderBottomColor: '#000',
	},
	formElemRow02: {
		flex: 3
	},

	formText: {
		color: '#000',
		fontSize: 18,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	formTextInput: {
		height: 40,
		color: '#8C8C8C',
		backgroundColor: 'rgba(0,0,0,0)',
		/* borderColor: 'gray',
		borderWidth: 1, */
	},

	loanIemCol01: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},

	reminderContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},



});
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LoanstatusScreen;