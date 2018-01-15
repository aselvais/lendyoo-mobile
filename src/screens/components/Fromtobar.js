import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, } from "react-native";
import AbstractScreen from "../AbstractScreen";

/**
 *
 */
class Fromtobar extends AbstractScreen
{

	/**
	 *
	 * @type {{loanmaindirection: boolean}}
	 */
	state = {
		loanmaindirection: true,
	};

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		let {navigation} = this.props;
		return(
			<View style={styles.topContainer}>
				<View style={[styles.avatarContainer, {marginLeft: 25,}]}>
					<Image style={styles.imageAvatar} source={require('../../../images/20664038_10158962015225136_6191620256789104695_n.jpg')}/>
					<Text style={styles.titleTopText}>{(this.state.loanmaindirection) ? 'FROM' : 'TO'}</Text>
				</View>

				<TouchableOpacity onPress={ () => this.setState({loanmaindirection: !this.state.loanmaindirection}) }>
					<View>
						<Image style={[styles.imageLogo, {
							transform: [{ scaleX: (this.state.loanmaindirection) ? 1 : -1 }]
						}]} source={require('../../../images/lendyoologoshadow.png')}/>
					</View>
				</TouchableOpacity>

				<TouchableOpacity onPress={ () => navigation.navigate('ContactsScreen') }>
					<View style={[styles.avatarContainer, {marginRight: 25,}]}>
					<Image style={styles.imageAvatar} source={require('../../../images/22179904_10212243801302792_6096409457610505771_o.jpg')}/>
					<Text style={styles.titleTopText}>{(this.state.loanmaindirection) ? 'TO' : 'FROM'}</Text>
				</View>
				</TouchableOpacity>
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
