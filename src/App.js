import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import LandingScreen from "./screens/LandingScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ContactsScreen from "./screens/ContactsScreen";
import LendScreen from "./screens/LendScreen";
import LoanstatusScreen from "./screens/LoanstatusScreen";
import LoginScreen from "./screens/LoginScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SignupScreen from "./screens/SignupScreen";
import AboutScreen from "./screens/AboutScreen";

/**
 *
 */
export default DrawerNavigator({

	/*--------------------------------------------------------------------------------*/
	LandingScreen: {
		screen: LandingScreen, navigationOptions: {
			drawerLabel: 'Welcome',
			drawerIcon: <Icon name='home'/>,
			headerTitle: 'Home',
		}
	},
	SignupScreen: {
		screen: SignupScreen, navigationOptions: {
			drawerLabel: 'Sign-up',
			drawerIcon: <Icon name='body'/>,
			headerTitle: 'Sign-up',
		}
	},
	LoginScreen: {
		screen: LoginScreen, navigationOptions: {
			drawerLabel: 'Login',
			drawerIcon: <Icon name='log-in'/>,
			headerTitle: 'Login',
		}
	},
	HistoryScreen: {
		screen: HistoryScreen, navigationOptions: {
			drawerLabel: 'Loans history',
			drawerIcon: <Icon name='list'/>,
			headerTitle: 'Loans history',
		}
	},
	LendScreen: {
		screen: LendScreen, navigationOptions: {
			drawerLabel: 'Lend item',
			drawerIcon: <Icon name='add-circle'/>,
			headerTitle: 'Lend item',
		}
	},
	LoanstatusScreen: {
		screen: LoanstatusScreen, navigationOptions: {
			drawerLabel: 'Loans status',
			drawerIcon: <Icon name='alert'/>,
			headerTitle: 'Loans status',
		}
	},
	ContactsScreen: {
		screen: ContactsScreen, navigationOptions: {
			drawerLabel: 'Contacts',
			drawerIcon: <Icon name='contacts'/>,
			headerTitle: 'Contacts',
		}
	},
	SettingsScreen: {
		screen: SettingsScreen, navigationOptions: {
			drawerLabel: 'Settings',
			drawerIcon: <Icon name='settings'/>,
			headerTitle: 'Settings',
		}
	},
	/*
	AboutScreen: {
		screen: AboutScreen, navigationOptions: {
			drawerLabel: 'About',
			drawerIcon: <Icon name='information-circle'/>,
			headerTitle: 'About',
		}
	},
	*/
});


const styles = StyleSheet.create({});
