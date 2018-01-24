import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Animated, Easing, } from "react-native";
import AbstractScreen from "../AbstractScreen";

/**
 *
 */
class Fromtobar extends AbstractScreen
{
	/**
	 * @type {{loanmaindirection: boolean}}
	 */
	state = { loanmaindirection: true, };
	/**
	 *
	 */
	flipValue = new Animated.Value(0);

	/**
	 *
	 */
	onPressLoanDirection()
	{
		let {loanmaindirection} = this.state;
		this.flipValue.setValue(loanmaindirection ? 0 : 1);
		Animated.timing(this.flipValue, {
				toValue: loanmaindirection ? 1 : 0,
				duration: 100,
				easing: Easing.ease
			}).start(
			() => this.setState({loanmaindirection: !this.state.loanmaindirection})
		);
	}

	/**
	 * Returns JSX for the round top avatar buttons
	 *
	 * @param style
	 * @param label
	 * @param imgSrc01
	 * @param imgSrc02
	 * @returns {*}
	 */
	getAvatarJSX(style={marginLeft: 25,}, label='', imgSrc01, imgSrc02)
	{
		let {navigation} = this.props;
		let _mJSX = <View style={[styles.avatarContainer, style]}>
						<Image style={styles.imageAvatar} source={(this.state.loanmaindirection) ? imgSrc01 : imgSrc02}/>
						<Text style={styles.titleTopText}>{label}</Text>
					</View>;
		return <TouchableOpacity onPress={ () => navigation.navigate('ContactsScreen') }>{_mJSX}</TouchableOpacity>;
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		let {navigation} = this.props;
		let {loanmaindirection} = this.state;
		const spin = this.flipValue.interpolate({ inputRange: [0, 1], outputRange: [-1, 1] });
		let usr01 = require('../../../images/contactDefault.png');
		let usr02 = require('../../../images/contactDefault.png');
		return(
			<View style={styles.topContainer}>
				{this.getAvatarJSX( {marginLeft: 25,}, 'FROM', usr01, usr02 )}
				<TouchableWithoutFeedback onPress={ () => this.onPressLoanDirection() }>
					<View>
						<Animated.Image
							style={[styles.imageLogo, { transform: [{ scaleX: spin }] }]}
							source={require('../../../images/lendyoologoshadow.png')}/>
					</View>
				</TouchableWithoutFeedback>
				{this.getAvatarJSX({ marginRight: 25,}, 'TO', usr02, usr01 )}
			</View>
		);
	}
}

const _localStyles = StyleSheet.create({
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'stretch',
	},
	avatarContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageAvatar: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginTop: 15,
	},
	titleTopText: {
		margin: 10,
	},

	imageLogo: {
		marginTop: 15,
		width: 90,
		height: 90,
		resizeMode: 'contain',
	},
});
const styles = {...AbstractScreen._styles, ..._localStyles};

export default Fromtobar;
