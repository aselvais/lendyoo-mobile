import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title} from 'native-base';
import ContactCollection from "../models/ContactCollection";
import ContactsWrapper from 'react-native-contacts-wrapper';
import Contact from '../models/Contact';

/**
 *
 */
class ContactsScreen extends AbstractScreen
{
	/**
	 *
	 */
	state = {
		showToast: false,
		models: [],
	};

	/**
	 *
	 * @type {ContactCollection}
	 */
	contactCollection = new ContactCollection();

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'LOAN HISTORY';
	}

	/**
	 *
	 * @param id
	 */
	onPressContact(contact)
	{
		this.console.log('Contactselectionscreen.onPressContact()');
		this.lendyooRegistry.contactCollection.setActiveModel(contact);
		this.lendyooRegistry.newLoan.Contact_id = contact._id;
		this.navigation.goBack();
	}

	/**
	 *
	 */
	onPressAddressbook()
	{
		var _that = this;
		ContactsWrapper.getContact()
			.then((contact) =>
			{
				var _fc = _that.lendyooRegistry.contactCollection.getModelByName(contact.name);
				if (!_fc)
				{
					var _c = new Contact();
					_c.Group_id = _that.user.Group_id;
					_c.User_id = _that.user._id;
					_c.name = contact.name;
					_c.email = contact.email;
					_c.phone = contact.phone;
					_c.save().then(
						function (c)
						{
							_that.lendyooRegistry.contactCollection.addModel(_c);
							_that.lendyooRegistry.contactCollection.setActiveModel(_c);
							_that.setState({models: _that.lendyooRegistry.contactCollection.models});
							_that.lendyooRegistry.newLoan.Contact_id = _c._id;
							_that.routes.goTo(_that.nextScreen);
						}
					);
				} else
				{
					_that.lendyooRegistry.contactCollection.setActiveModel(_fc);
					_that.routes.goTo(_that.nextScreen);
				}
			})
			.catch((error) =>
			{
				this.console.log("ERROR CODE: ", error.code);
				this.console.log("ERROR MESSAGE: ", error.message);
			});
	}

	/**
	 *
	 */
	componentDidMount()
	{
		this.contactCollection.setRemoteContactsFromUser(this.user._id).then(
			(d) => this.setState({models: this.contactCollection.models}),
			(err) => console.log('error', err)
		);
	}

	/**
	 *
	 */
	onPressAddressbook()
	{
		console.log('onPressAddressbook');
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		let {navigation} = this.props;
		let {models} = this.state;
		return (
			<View style={styles.mainContainer}>
				{
					models.map((d, k) => (
						<TouchableOpacity key={d._id} onPress={() =>
						{
							this.lendyooRegistry.newLoan.toId = d._id;
							navigation.navigate('LendScreen');
						}}>
							<View style={[styles.loanIemContainer, {backgroundColor: (k % 2 == 0) ? '#FFF' : '#EEE'}]}>
								<View style={styles.loanIemCol01}>
									<Image style={styles.imageAvatar}
										   source={require('../../images/contactDefault2.png')}/>
								</View>
								<View style={styles.loanIemCol02}>
									<Text style={styles.loanIemText02}>Name:</Text>
									<Text style={styles.loanIemText03}>{d.getFullName()}</Text>
								</View>
							</View>
						</TouchableOpacity>
					))
				}
			</View>
		);
	}

	/**
	 *
	 * @returns {XML}
	 */
	render()
	{
		let {navigation} = this.props;
		return (
			<View style={styles.mainContainer}>

				<ScrollView contentContainerStyle={{flexGrow: 1}}>
					{this.getContent()}
				</ScrollView>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => this.onPressAddressbook()}>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>Open my book</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>
		);
	};

}


const _localStyles = StyleSheet.create(
	{
		imageAvatar: {
			width: 40,
			height: 40,
			borderRadius: 20,
		},
		loanIemContainer: {
			height: 70,
			borderTopWidth: 1,
			borderTopColor: '#DDD',
			flexDirection: 'row',
			alignItems: 'center',
		},
		loanIemCol01: {
			flex: 20,
			alignItems: 'center'
		},
		loanIemCol02: {
			flex: 80,
		},
		loanIemText02: {
			color: '#00B8DD',
			fontSize: 13,
		},
		loanIemText03: {
			color: '#00B8DD',
			fontSize: 18,
		},

		titleContainer: {
			alignItems: 'center',
			backgroundColor: '#FFF',
		},
		titleTxt: {
			color: '#00B8EC',
			paddingTop: 10,
			paddingBottom: 10,
			fontSize: 28
		},

		mainContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			backgroundColor: '#FFF',
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

export default ContactsScreen;