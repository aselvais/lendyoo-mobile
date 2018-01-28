import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ContactCollection from "../models/ContactCollection";

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
							<TouchableOpacity onPress={() => this.onPressAddressbook() }>
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