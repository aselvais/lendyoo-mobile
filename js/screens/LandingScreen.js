import React, {Component} from 'react';
import {Animated, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AbstractScreen from "./AbstractScreen";

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
				<View style={styles.container}>
					<Animated.View
						style={{
							...this.props.style,
							opacity: fadeAnim,
						}}>
						<Image style={styles.logo} source={require('../../images/logo.png')}/>
					</Animated.View>
					<Text style={styles.titleText}>
						Lendyou !
					</Text>
				</View>
			</LinearGradient>
		);
	};

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: width - 100,
		height: width - 100
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5
	},
	titleText: {
		backgroundColor: 'transparent',
	},
});

export default LandingScreen;