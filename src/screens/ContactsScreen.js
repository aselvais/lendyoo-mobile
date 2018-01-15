import React from 'react';
import AbstractScreen from "./AbstractScreen";
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title} from 'native-base';
import Fromtobar from './components/Fromtobar';


/**
 *
 */
class ContactsScreen extends AbstractScreen
{

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
	 * @returns {*}
	 */
	getContent()
	{
		let {navigation} = this.props;
		let data = [
			{from: 'Mister 01', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 02', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 03', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 04', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 05', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 06', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 07', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 08', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 09', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 10', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 11', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 12', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 13', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 14', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 15', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 16', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 17', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 18', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 19', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 20', to: 'Mister 02', loan: 'Object'},
			{from: 'Mister 21', to: 'Mister 02', loan: 'Object'},
		];
		return (
			<View style={styles.mainContainer}>
				{
					data.map( (d, k) => (
						<TouchableOpacity key={k} onPress={ () => navigation.navigate('LendScreen') }>
							<View style={[styles.loanIemContainer, {backgroundColor: (k%2 == 0) ? '#FFF' : '#EEE'}]}>
								<View style={styles.loanIemCol01}>
									<Image style={styles.imageAvatar} source={require('../../images/10498217_10152245479307634_4137351399163079376_o.jpg')}/>
								</View>
								<View style={styles.loanIemCol02}>
									<Text style={styles.loanIemText02}>Name:</Text>
									<Text style={styles.loanIemText03}>Arnaud Selvais</Text>
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

				<Fromtobar/>

				<ScrollView contentContainerStyle={{ flexGrow: 1 }} >
					{this.getContent()}
				</ScrollView>

			</Container>
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
		buttonOrangeContainer: {
			alignItems: 'center',
			backgroundColor: '#ED7322',
			borderRadius: 0,
			padding: 15,
		},


	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default ContactsScreen;