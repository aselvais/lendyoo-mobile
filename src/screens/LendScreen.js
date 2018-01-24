import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon,} from 'native-base';
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

	/**
	 *
	 */
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
	 */
	onPressPhoto()
	{
		this.props.navigation.navigate('CameraScreen');
	}

	/**
	 *
	 * @returns {*}
	 */
	getDateContainerJSX()
	{
		let {navigation} = this.props;
		let mDate = moment((this.lendyooRegistry.newLoan && this.lendyooRegistry.newLoan.dateExpiration) ? this.lendyooRegistry.newLoan.dateExpiration : new Date()).format('DD/MM/YYYY');
		return (
			<TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
				<View style={{alignItems: 'center',}}>
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
	getPhotoWidgetJSX()
	{
		return (
			<TouchableOpacity onPress={() => this.onPressPhoto()}>
				<View style={{
					backgroundColor: '#000',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%'
				}}>
					<Icon
						name="ios-camera-outline"
						style={{fontSize: 120, color: 'rgba(255,255,255,.4)'}}
					/>
					<Text style={{ color: 'rgba(255,255,255,.4)', }}>Take picture</Text>
				</View>
			</TouchableOpacity>
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	getBottomButtonJSX()
	{
		return (
			<TouchableOpacity onPress={() => navigation.navigate('LoanstatusScreen')}>
				<View style={styles.buttonOrangeContainer}>
					<Text style={styles.buttonTextColor}>SAVE LOAN</Text>
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
		let {navigation} = this.props;
		return (
			<View style={styles.mainContainer}>

				<View>
					<Fromtobar navigation={navigation}/>
				</View>

				<View style={{flex: 1}}>
					{this.getPhotoWidgetJSX()}
				</View>

				<View>
					{this.getDateContainerJSX()}
				</View>

				<View>
					{this.getBottomButtonJSX()}
				</View>

			</View>
		);
	}
}

const _localStyles = StyleSheet.create(
	{

		fborder:
			{
				borderColor: 'red',
				borderWidth: 1,
			},

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

		formElemRow01: {},
		descText: {
			color: '#000',
			fontSize: 20,
			paddingTop: 5,
		},

		formElemRow02: {},
		formTextInput: {
			width: AbstractScreen.width - 100,
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