import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image, } from 'react-native';
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
	state = {
		showBarcodeInfo: false,
		errorMsg: '',
	};

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
	onPressPhoto()
	{
		this.props.navigation.navigate('CameraScreen');
	}

	/**
	 *
	 */
	checkLoanValidity()
	{
		if (!this.lendyooRegistry.contactCollection.getModelById(this.lendyooRegistry.newLoan.toId))
		{
			this.setState({showBarcodeInfo: true, errorMsg: 'You need to choose a contact'});
			return false;
		}
		if (!this.lendyooRegistry.newPhoto.data)
		{
			this.setState({showBarcodeInfo: true, errorMsg: 'You need to add a picture of the item lent'});
			return false;
		}
		if (!this.lendyooRegistry.newLoan.title)
		{
			this.setState({showBarcodeInfo: true, errorMsg: 'The loan title is missing'});
			return false;
		}
		return true;
	}

	/**
	 *
	 */
	pressSaveLoan()
	{
		if (!this.checkLoanValidity()) return false;

		let contact = this.lendyooRegistry.contactCollection.getModelById(this.lendyooRegistry.newLoan.toId);
		// set required data
		this.lendyooRegistry.newLoan.User_id = this.user._id;
		this.lendyooRegistry.newLoan.dateCreated = new Date();
		this.lendyooRegistry.newLoan.Group_id = this.user.Group_id;
		if (contact) this.lendyooRegistry.newLoan.Contact_id = contact._id;

		// save photo here and do not store the photo data in photo (use the local path for that)

		this.lendyooRegistry.newLoan.save().then(
			(d) =>
			{
				this.lendyooRegistry.newPhoto.Loan_id = this.lendyooRegistry.newLoan._id;
				this.lendyooRegistry.newPhoto.save().then(
					(ddd) => {
						this.lendyooRegistry.loanCollection.addModel(this.lendyooRegistry.newLoan);
						this.lendyooRegistry.loanCollection.setActiveModel(this.lendyooRegistry.newLoan);
						console.log(this.lendyooRegistry.newPhoto);
						console.log(this.lendyooRegistry.newLoan);
						this.lendyooRegistry.newPhoto.uploadImage();
						this.props.navigation.navigate('HistoryScreen');
					},
					(err) => { console.log('error', err); }
				);
			},
			(err) => { console.log('error', err); }
		);
	}

	/**
	 *
	 * @returns {*}
	 */
	getDateContainerJSX()
	{
		let {navigation} = this.props;
		let mDate = moment((this.lendyooRegistry.newLoan.loanExpirationDate) ? this.lendyooRegistry.newLoan.loanExpirationDate : new Date()).format('DD/MM/YYYY');
		return (
			<TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>
				<View style={{alignItems: 'center',}}>
					<View>
						<Text style={styles.descText}>Return date</Text>
					</View>
					<View>
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
		if (this.lendyooRegistry.newPhoto.data)
		{
			return (
				<TouchableOpacity onPress={() => this.onPressPhoto()}>
					<Image source={{
							   isStatic: true,
							   uri: 'data:image/jpeg;base64,'+this.lendyooRegistry.newPhoto.data,
						   }}
						   style={styles.photoView}>
						<Icon name="ios-camera-outline" style={styles.photoIcon}/>
						<Text style={styles.photoText}>
							{'Re-take picture'}
						</Text>
					</Image>
				</TouchableOpacity>
			);
		}
		else
		{
			return (
				<TouchableOpacity onPress={() => this.onPressPhoto()}>
					<View style={[styles.photoView, {backgroundColor: '#000',} ]}>
						<Icon name="ios-camera-outline" style={styles.photoIcon}/>
						<Text style={styles.photoText}>
							{'Take picture'}
						</Text>
					</View>
				</TouchableOpacity>
			);
		}
	}

	/**
	 *
	 * @returns {*}
	 */
	getBottomButtonJSX()
	{
		return (
			<TouchableOpacity onPress={() => this.pressSaveLoan()}>
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
				<View><Fromtobar navigation={navigation}/></View>
				<View style={{flex: 1}}>{this.getPhotoWidgetJSX()}</View>
				<View>{this.getDateContainerJSX()}</View>
				<View>{this.getBottomButtonJSX()}</View>
				{(this.state.showBarcodeInfo) ? this.getbarCodeWindowJSX("Heads up!", this.state.errorMsg) : null}
			</View>
		);
	}
}

const _localStyles = StyleSheet.create({
	fborder: {
		borderColor: 'red',
		borderWidth: 1,
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	photoView: {
//		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	photoIcon: {
		fontSize: 100,
		color: 'rgba(255,255,255,.8)',
	},
	photoText: {
		color: 'rgba(255,255,255,.8)',
	},
	container: {
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	descText: {
		color: '#000',
		fontSize: 20,
		paddingTop: 5,
	},
	formTextInput: {
		width: AbstractScreen.width - 100,
		textAlign: 'center',
		color: '#555',
		margin: 5,
		padding: 0,
	},
});
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LendScreen;