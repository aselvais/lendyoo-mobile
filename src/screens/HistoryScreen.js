import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import { Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title, Toast, Root, } from 'native-base';
import ContactCollection from "../models/ContactCollection";

/**
 *
 */
class HistoryScreen extends AbstractScreen
{
	/**
	 *
	 */
	state = {
		showToast: false,
		models: [],
		contactCollectionModels: [],
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
			(d) => {
				this.setState({contactCollectionModels: this.contactCollection.models}, () => {
					this.loanCollection.setRemoteLoansFromUser(this.user._id).then(
						(d) => {
							if (d) {
								this.setState({models: this.loanCollection.models});
							}
							else
							{
								console.log('Error loanCollection.setRemoteLoansFromUser returned false');
							}
						},
						(err) => {
							console.log('Error ', err);
						}
					);
				});
			},
			(err) => console.log('error', err)
		);
	}

	/**
	 *
	 * @param d
	 */
	onPressLoan(d)
	{
		this.lendyooRegistry.loanCollection.setActiveModel(d);
		this.props.navigation.navigate('LoanstatusScreen');
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		let {models } = this.state;
		let { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>
				{
					models.map( (d, k) => (
						<TouchableOpacity key={d._id} onPress={ () => this.onPressLoan(d) }>
						<View style={[styles.loanIemContainer, {backgroundColor: (k%2 == 0) ? '#FFF' : '#EEE'}]}>
							<View style={styles.loanIemCol01}>
								<Image style={styles.imageAvatar} source={{uri: 'https://api.lendyou.io/api-v2/photo/getloanimage/' + d._id + '/100'}} />
							</View>
							<View style={styles.loanIemCol02}>
								<Text style={styles.loanIemText02}>Item</Text>
								<Text style={styles.loanIemText03}>{d.title}</Text>
							</View>
							<View style={styles.loanIemCol03}>
								<Text style={styles.loanIemText04}></Text>
								<Text style={styles.loanIemText04}>{this.contactCollection.getModelById(d.Contact_id).getFullName()}</Text>
							</View>
						</View>
						</TouchableOpacity>
					) )
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
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerToggle')}>
							<Icon name='menu'/>
						</Button>
					</Left>
					<Body>
						<Title>{this.appTitle}</Title>
					</Body>
					<Right/>
				</Header>

				<View style={styles.titleContainer}>
					<Text style={styles.titleTxt}>{this.getTitle()}</Text>
				</View>

				<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
				{this.getContent()}
				</ScrollView>

				<View style={styles.genericRow}>
					<TouchableOpacity onPress={() => navigation.navigate('LendScreen') }>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>LEND/BORROW</Text>
						</View>
					</TouchableOpacity>
				</View>
			</Container>
		);
	};

}


const _localStyles = StyleSheet.create(
	{
		imageAvatar: {
			width: 50,
			height: 50,
			borderRadius: 25,
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
			flex: 40,
		},
		loanIemCol03: {
			flex: 30,
		},
		loanIemText02: {
			color: '#00B8DD',
			fontSize: 13,
		},
		loanIemText03: {
			color: '#00B8DD',
			fontSize: 18,
		},
		loanIemText04: {
			paddingRight: 8,
			flexWrap: 'wrap',
			color: '#0086B3',
			fontSize: 12,
			textAlign: 'right',
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
			justifyContent: 'space-between',
			alignItems: 'stretch',
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
			flex:1,
			alignItems: 'flex-end',
			paddingRight: 10,
		},
		fbBtnCol02: {
			flex:2,
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

export default HistoryScreen;