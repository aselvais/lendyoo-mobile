import React from 'react';
import {
	Animated,
	Easing,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import AbstractScreen from "../AbstractScreen";

/**
 *
 */
class Fromtobar extends AbstractScreen
{
	profileImage01 = require('../../../images/contactDefault.png');
	profileImage02 = require('../../../images/contactDefault2.png');
	flipValue = new Animated.Value(0);

	/**
	 * @type {{loanmaindirection: boolean}}
	 */
	state = {
		loanmaindirection: true,
	};

	/**
	 *
	 */
	onPressLoanDirection()
	{
		let {loanmaindirection} = this.state;
		this.flipValue.setValue(loanmaindirection ? 0 : 1);
		Animated.timing(this.flipValue, {
			toValue: loanmaindirection ? 1 : 0,
			duration: 200,
			easing: Easing.ease
		}).start(() => this.setState({loanmaindirection: !this.state.loanmaindirection}));
	}

	/**
	 * Returns JSX for the round top avatar buttons
	 *
	 * @param style
	 * @param label
	 * @param usr01
	 * @param usr02
	 * @returns {*}
	 */
	getAvatarJSX(style = {}, label = '', usr01 = {image: null, name: ''}, usr02 = {image: null, name: ''})
	{
		let {navigation} = this.props;
		let labelname = (this.state.loanmaindirection) ? usr01.name : usr02.name;
		let isMe = (labelname === this.user.getFullName()) ? true : false;
		let _mJSX = <View style={[styles.avatarContainer, style]}>
			<Text style={styles.titleTopText01}>{label}</Text>
			<Image style={styles.imageAvatar} source={(this.state.loanmaindirection) ? usr01.image : usr02.image}/>
			<Text style={[styles.titleTopText02, {color: isMe ? '#000' : '#00B8DD',}]}>{labelname}</Text>
		</View>;
		return isMe ? _mJSX :
			<TouchableOpacity onPress={() => navigation.navigate('ContactsScreen')}>{_mJSX}</TouchableOpacity>;
	}

	/**
	 *
	 * @returns {string}
	 */
	getContactFullName()
	{
		let contact = this.lendyooRegistry.contactCollection.getModelById(this.lendyooRegistry.newLoan.toId);
		if (contact) return contact.getFullName();
		else return '';
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		let {navigation} = this.props;
		let {loanmaindirection} = this.state;
		const spin = this.flipValue.interpolate({inputRange: [0, 1], outputRange: [-1, 1]});
		let usr01 = {image: this.profileImage01, name: this.user.getFullName()};
		let usr02 = {
			image: this.profileImage02,
			name: (this.lendyooRegistry.newLoan.toId) ? this.getContactFullName()  : 'Choose...'
		};
		return (
			<View style={styles.topContainer}>
				{this.getAvatarJSX({
					flex: 1,
					alignItems: 'center',
					width: AbstractScreen.width / 3
				}, 'FROM', usr01, usr02)}
				<TouchableWithoutFeedback onPress={() => this.onPressLoanDirection()}>
					<View style={{flex: 1, alignItems: 'center', width: AbstractScreen.width / 3}}>
						<Animated.Image style={[styles.imageLogo, {transform: [{scaleX: spin}]}]}
										source={require('../../../images/lendyoologoshadow.png')}/>
					</View>
				</TouchableWithoutFeedback>
				{this.getAvatarJSX({
					flex: 1,
					alignItems: 'center',
					width: AbstractScreen.width / 3
				}, 'TO', usr02, usr01)}
			</View>
		);
	}
}

const _localStyles = StyleSheet.create(
	{
		topContainer: {
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
		avatarContainer: {
			justifyContent: 'center',
			alignItems: 'center',
		},
		imageAvatar: {
			margin: 5,
			width: 70,
			height: 70,
			borderRadius: 35,
		},
		titleTopText01: {
			marginTop: 15,
			fontSize: 10,
//		fontWeight: 'bold',
		},
		titleTopText02: {
			fontSize: 15,
			marginBottom: 10,
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
