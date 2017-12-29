import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon, Button} from 'native-base';
import {Col, Grid, Row} from "react-native-easy-grid";

/**
 *
 */
class SignupScreen extends AbstractScreen
{

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'SignupScreen';
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		return (
			<Grid>
				<Row size={40} style={styles.allcentered}><Text>SING UP</Text></Row>
				<Row size={20} style={styles.allcentered}>
					<TouchableOpacity style={styles.fbBtnTouch} onPress={ () => console.warn('fbBtn Touch Touched !') }>
						<Grid>
							<Col><Icon name="logo-facebook" style={{fontSize: 20, color: '#FFFFFF'}}/></Col>
							<Col><Text style={styles.fbBtnText}>Sign up with{"\n"}Facebook</Text></Col>
						</Grid>
					</TouchableOpacity>
				</Row>
				<Row size={30} style={styles.allcentered}>
					<TouchableOpacity style={styles.underlineBtnTouch} onPress={ () => console.warn('underlineBtnTouch Touched !') }>
						<Text style={styles.underlineBtnText}>User other log{"\n   "}in methods</Text>
					</TouchableOpacity>
				</Row>
				<Row size={10} style={styles.lastrow}>
					<Button style={styles.buttonOrange}>
					<Text style={styles.buttonTextColor}>HAVE AN ACCOUNT? LOG IN</Text>
					</Button>
				</Row>
			</Grid>
		);
	}


}
const _localStyles = StyleSheet.create(
	{
		lastrow: {
			alignItems: 'center',
			alignSelf: 'center',
		},
		buttonOrange: {
			backgroundColor: '#ED7322',
			borderRadius: 0,
			width: '100%',
			justifyContent: 'center',
		},
		buttonTextColor: {
			color: '#FFFFFF',
			fontSize: 16,
		},

		fbBtnTouch: {
			alignItems: 'center',
			alignSelf: 'center',
			width: '100%',
			backgroundColor: '#0086B3',
			padding: 20,
		},
		fbBtnText: {
			color: '#FFFFFF',
			fontSize: 20,
		},

		underlineBtnTouch: {
			alignItems: 'center',
			alignSelf: 'center',
			width: '100%',
		},
		underlineBtnText: {
			alignItems: 'center',
			textDecorationLine: 'underline',
			fontSize: 25,
		}
	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};
export default SignupScreen;