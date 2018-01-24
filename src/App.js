import React from 'react';
import {DrawerNavigator, StackNavigator, } from 'react-navigation';
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
import CalendarScreen from "./screens/CalendarScreen";
import ImagedetailScreen from "./screens/ImagedetailScreen";
import ImagepickerScreen from "./screens/ImagepickerScreen";
import CameraScreen from "./screens/CameraScreen";

/**
 *
 */
const ObjDrawerNavigator = DrawerNavigator({
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
	SettingsScreen: {
		screen: SettingsScreen, navigationOptions: {
			drawerLabel: 'Settings',
			drawerIcon: <Icon name='settings'/>,
			headerTitle: 'Settings',
		}
	},
	AboutScreen: {
		screen: AboutScreen, navigationOptions: {
			drawerLabel: 'About',
			drawerIcon: <Icon name='information-circle'/>,
			headerTitle: 'About',
		}
	},
}, {
	useNativeAnimations: true,
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle',
});
const ObjStackNavigator = StackNavigator({
	LandingScreen: {
		screen: LandingScreen, navigationOptions: {
			headerMode: 'none',
			header: null,
		}
	},
	LoginScreen: {
		screen: LoginScreen, navigationOptions: {
			headerMode: 'none',
			header: null,
		}
	},
	Home: {screen: ObjDrawerNavigator, navigationOptions:{
			headerMode: 'none',
			header: null,
		}},
	SignupScreen: {
		screen: SignupScreen, navigationOptions: {
			drawerLabel: 'Sign-up',
			drawerIcon: <Icon name='body'/>,
			headerTitle: 'Sign-up',
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
	CalendarScreen: {
		screen: CalendarScreen, navigationOptions: {
			drawerLabel: 'Calendar',
			drawerIcon: <Icon name='calendar'/>,
			headerTitle: 'Return date',
		}
	},
	ImagedetailScreen: {
		screen: ImagedetailScreen, navigationOptions: {
			drawerLabel: 'Image detail',
			drawerIcon: <Icon name='information-circle'/>,
			headerTitle: 'Image detail',
		}
	},
	ImagepickerScreen: {
		screen: ImagepickerScreen, navigationOptions: {
			drawerLabel: 'Image picker',
			drawerIcon: <Icon name='information-circle'/>,
			headerTitle: 'Image picker',
		}
	},
	CameraScreen: {
		screen: CameraScreen, navigationOptions: {
			drawerLabel: 'Camera',
			drawerIcon: <Icon name='camera'/>,
			headerTitle: 'Camera',
		}
	},
});

export default ObjStackNavigator;

