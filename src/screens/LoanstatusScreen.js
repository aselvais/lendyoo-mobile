import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class LoanstatusScreen extends AbstractScreen
{
	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'LOAN DETAIL';
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		return (
			<View style={styles.mainContainer}>

				<View style={{ alignItems: 'center', }}>
					<Text style={styles.txtDetailTitle}>{this.getTitle()}</Text>
				</View>

				<View style={{ alignItems: 'center', }}>
					<Text>Form</Text>
				</View>

				<View style={{ alignItems: 'center', }}>
					<Text style={styles.txtMoreinfo}>Access to location and agenda is required (why?)</Text>
				</View>


				<View>
					<TouchableOpacity>
						<View style={styles.buttonOrangeContainer}>
							<Text style={styles.buttonTextColor}>SAVE LOAN</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}


const _localStyles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},

	txtDetailTitle: {
		marginTop: 30,
		color: '#9A9A9A',
		fontSize: 25,
	},

	txtMoreinfo: {
		color: '#9A9A9A',
		fontSize: 19,
		flexWrap: 'wrap',
		marginLeft: 60,
		marginRight: 60,
		textAlign: 'center',
	},

});
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LoanstatusScreen;