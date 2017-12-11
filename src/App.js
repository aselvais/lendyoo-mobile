import React from 'react';
import {StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
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
	LandingScreen: {screen: LandingScreen},
	SignupScreen: {screen: SignupScreen},
	LoginScreen: {screen: LoginScreen},
	HistoryScreen: {screen: HistoryScreen},
	LendScreen: {screen: LendScreen},
	LoanstatusScreen: {screen: LoanstatusScreen},
	ContactsScreen: {screen: ContactsScreen},
	SettingsScreen: {screen: SettingsScreen},
	AboutScreen: {screen: AboutScreen},
});


const styles = StyleSheet.create({});
