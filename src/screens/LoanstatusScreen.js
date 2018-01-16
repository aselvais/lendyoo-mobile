import React from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

/**
 *
 */
class LoanstatusScreen extends AbstractScreen
{
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
	render()
	{
		let { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>

				<View style={{alignItems: 'center',}}>
					<Text style={styles.titleTxt}>{this.getTitle()}</Text>
				</View>

				<View style={{alignItems: 'center', marginLeft: 30, marginRight: 30, }}>
					{this.getFormElement('Object name', 'DVD Matrix', true)}
					{this.getFormElement('Object type', 'Movie DVD', true)}
					{this.getFormElement('Loan end date', '01/12/2017', false)}
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
		);
	}
}


const _localStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},

	titleTxt: {
		color: '#00B8EC',
		paddingTop: 20,
		fontSize: 28
	},

	txtReminders: {
		color: '#000',
		fontSize: 17,
	},

	txtMoreinfo: {
		color: '#9A9A9A',
		fontSize: 19,
		flexWrap: 'wrap',
		marginLeft: 60,
		marginRight: 60,
		textAlign: 'center',
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
	},
	formTextInput: {
		height: 40,
		color: '#8C8C8C',
		/* borderColor: 'gray',
		borderWidth: 1, */
	},

	reminderContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},



});
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LoanstatusScreen;