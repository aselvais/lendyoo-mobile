import React, {Component} from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AbstractScreen from "./AbstractScreen";
import {Content, Icon} from 'native-base';

const {height, width} = Dimensions.get('window');

/**
 *
 */
class LandingScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{fadeAnim: *}}
	 */
	state = {
		fadeAnim: new Animated.Value(0),
	};

	/**
	 *
	 */
	_anim = Animated.timing(
		this.state.fadeAnim,
		{
			toValue: 1,
			duration: 1500,
		}
	);

	/**
	 *
	 */
	componentDidMount()
	{
		this._anim.start();
	}

	/**
	 *
	 * @returns {XML}
	 */
	render()
	{
		let { fadeAnim } = this.state;

		return (
			<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={styles.linearGradient}>
				<View style={styles.mainContainer}>

					<View style={[styles.container, { flex: 30, flexDirection: 'column', alignItems: 'center'}]}>
						<View>
						<Animated.View style={{ ...this.props.style, opacity: fadeAnim, }}>
							<Image style={styles.logo} source={require('../../images/logo.png')}/>
						</Animated.View>
						</View>
						<View>
							<Text style={{ color: '#9A9A9A', paddingTop: 10, fontSize: 20 }}>iLendYou</Text>
						</View>
					</View>


					<View style={[styles.container, {
						flex: 50,
						flexDirection: 'column',
						alignItems: 'center',
					}]}>
						<Text style={{
							flexWrap: 'wrap',
							color: '#0086B3',
							fontSize: 33,
							paddingLeft: 50,
							paddingRight: 50,
							textAlign: 'center',
						}}>
							THIS IS A F*CKING GREAT ONBOARDING SCREEN
						</Text>
					</View>

					<View style={[styles.container, { flex: 20, justifyContent: 'flex-end'}]}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
							<View style={styles.buttonOrangeContainer}>
								<Text style={styles.buttonTextColor}>GET STARTED</Text>
							</View>
						</TouchableOpacity>
					</View>


				</View>
			</LinearGradient>
		);
	};

}

const _localStyles = StyleSheet.create(
	{
		mainContainer: {
			flex: 1,
			flexDirection: 'column',
			justifyContent: 'space-between',
			alignItems: 'stretch',
		},

		container: {
			alignItems: 'stretch',
			justifyContent: 'center',
			/* borderWidth: 1, borderColor: 'red', */
		},

		logo: {
			width: width/4,
			height: width/4,
			resizeMode: 'contain',
		},
	}
);
const styles = {...AbstractScreen._styles, ..._localStyles};

export default LandingScreen;