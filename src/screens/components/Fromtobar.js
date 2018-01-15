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
	state = {
		loanmaindirection: true,
	};
	/**
	 *
	 */
	flipValue = new Animated.Value(0);

	/**
	 *
	 */
	flipLogo()
	{
		let {loanmaindirection} = this.state;
		this.flipValue.setValue(loanmaindirection ? 0 : 1);
		Animated.timing(
			this.flipValue,
			{
				toValue: loanmaindirection ? 1 : 0,
				duration: 100,
				easing: Easing.ease
			}
		).start();
	}

	/**
	 *
	 */
	onPressLoanDirection()
	{
		this.flipLogo();
		this.setState({loanmaindirection: !this.state.loanmaindirection});
	}

	/**
	 * Returns JSX for the round top avatar buttons
	 *
	 * @param style Styles to add
	 * @param imgSrc Image source
	 * @param txt1 Label 01
	 * @param txt2 Label 02
	 * @param toRoute Name of the route to link to on press
	 * @returns {*}
	 */
	getAvatarJSX(style={marginLeft: 25,}, imgSrc, txt1='FROM', txt2='TO', toRoute=null)
	{
		let {navigation} = this.props;
		let _mJSX = <View style={[styles.avatarContainer, style]}>
						<Image style={styles.imageAvatar} source={imgSrc}/>
						<Text style={styles.titleTopText}>{(this.state.loanmaindirection) ? txt1 : txt2}</Text>
					</View>;
		if (toRoute)
			return <TouchableOpacity onPress={ () => navigation.navigate(toRoute) }>{_mJSX}</TouchableOpacity>;
		else
			return _mJSX;
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		let {navigation} = this.props;
		let {loanmaindirection} = this.state;
		const spin = this.flipValue.interpolate({
			inputRange: [0, 1],
			outputRange: [-1, 1]
		});
		return(
			<View style={styles.topContainer}>

				{this.getAvatarJSX( {marginLeft: 25,}, require('../../../images/20664038_10158962015225136_6191620256789104695_n.jpg'), 'FROM', 'TO', 'ContactsScreen', )}

				<TouchableWithoutFeedback onPress={ () => this.onPressLoanDirection() }>
					<View>
						<Animated.Image style={[styles.imageLogo, {
							transform: [{ scaleX: spin }]
						}]} source={require('../../../images/lendyoologoshadow.png')}/>
					</View>
				</TouchableWithoutFeedback>

				{this.getAvatarJSX({ marginRight: 25,}, require('../../../images/22179904_10212243801302792_6096409457610505771_o.jpg'), 'TO', 'FROM', null )}
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
