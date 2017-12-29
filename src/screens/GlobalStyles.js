import {StyleSheet} from "react-native";

export default StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	linearGradient: {
		//  flexDirection: row, row-reverse, column, column-reverse
		//  justifyContent: flex-start, flex-end, center, space-between, space-around
		//  alignSelf: auto, flex-start, flex-end, center, stretch
		//  alignItems: flex-start, flex-end, center, stretch
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
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
		paddingTop: 30,
		fontSize: 34
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

});
