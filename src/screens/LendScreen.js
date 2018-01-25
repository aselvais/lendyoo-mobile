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
		if (this.lendyooRegistry.newLoan.photo)
		{
			return (
				<TouchableOpacity onPress={() => this.onPressPhoto()}>
					<Image source={{
							   isStatic: true,
							   uri: 'data:image/jpeg;base64,'+this.lendyooRegistry.newLoan.photo,
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
				<View><Fromtobar navigation={navigation}/></View>
				<View style={{flex: 1}}>{this.getPhotoWidgetJSX()}</View>
				<View>{this.getDateContainerJSX()}</View>
				<View>{this.getBottomButtonJSX()}</View>
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
		color: 'rgba(255,255,255,.4)',
	},
	photoText: {
		color: 'rgba(255,255,255,.4)',
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