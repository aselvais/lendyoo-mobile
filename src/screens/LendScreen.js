import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon} from 'native-base';
import Fromtobar from './components/Fromtobar';
import moment from "moment/moment";
import {observer} from 'mobx-react/native';

/**
 *
 */
@observer
class LendScreen extends AbstractScreen
{

	/**
	 *
	 * @param props
	 */
	constructor(props)
	{
		super(props);
		this.lendyooRegistry.setNewLoanMode(true);
	}

	componentWillMount()
	{
		console.log(this.lendyooRegistry.instanceTime);
		console.log(this.lendyooRegistry.isNewLoan);
		console.log(this.lendyooRegistry.newLoan.id);
		console.log(this.lendyooRegistry.newLoan.dateExpiration);
	}

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
		let { navigation } = this.props;
		let mDate = moment((this.lendyooRegistry.newLoan && this.lendyooRegistry.newLoan.dateExpiration) ? this.lendyooRegistry.newLoan.dateExpiration : new Date()).format('DD/MM/YYYY');
		return (
			<TouchableOpacity onPress={ () => navigation.navigate('CalendarScreen') }>
			<View style={{ alignItems: 'center', }}>
				<View style={styles.formElemRow01}>
					<Text style={styles.descText}>Return date</Text>
				</View>
				<View style={styles.formElemRow02}>
					<Text style={styles.formTextInput}>{mDate}</Text>
				</View>
			</View>
			</TouchableOpacity>
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