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


/**
 *
 */
export default DrawerNavigator({
	LandingScreen: {screen: LandingScreen},
	HistoryScreen: {screen: HistoryScreen},
	ContactsScreen: {screen: ContactsScreen},
	LendScreen: {screen: LendScreen},
	LoanstatusScreen: {screen: LoanstatusScreen},
	LoginScreen: {screen: LoginScreen},
	SettingsScreen: {screen: SettingsScreen},
	SignupScreen: {screen: SignupScreen}


});


const styles = StyleSheet.create({});
