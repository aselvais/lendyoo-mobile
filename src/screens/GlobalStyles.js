import {StyleSheet} from "react-native";
import AbstractScreen from "./AbstractScreen";
import {Dimensions} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
		flex: 1,
//		paddingLeft: 15,
//		paddingRight: 15,
		borderRadius: 0,
	},
	titleText: {
		backgroundColor: 'transparent',
	},
	allcentered: {
		alignItems: 'center',
		alignSelf: 'center',
	},

	titleContainer: {
		alignItems: 'center',
	},
	titleTxt: {
		color: '#00B8EC',
		paddingTop: 20,
		fontSize: 28,
		backgroundColor: 'rgba(0,0,0,0)',
	},

	buttonOrangeContainer: {
		alignItems: 'center',
		backgroundColor: '#ED7322',
		borderRadius: 0,
		padding: 15,
		margin: 10,
	},
	buttonTextColor: {
		fontSize: 16,
		color: '#FFFFFF',
	},
	formText: {
		color: '#000',
		backgroundColor: 'rgba(0,0,0,0)',
	},

	redBorders: {
		borderWidth: 1,
		borderColor: '#FF0000',
	},
	overlayLayer: {
		flex: 1,
		position: 'absolute',
		left: 0,
		top: 0,
	},
	overlayLayer1: {
		flex: 1,
		zIndex: 1010,
		position: 'absolute',
		left: 0,
		top: 0,
		width: width,
		padding: 30,
	},
	overlayLayer2: {
		flex: 1,
		zIndex: 1000,
		position: 'absolute',
		left: 0,
		top: 0,
		width: width,
		height: height,
		//backgroundColor: 'rgba(255,255,255,.8)',
		backgroundColor: 'rgba(0,0,0,.8)',
	},

});
