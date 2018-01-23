import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import { Container, Content, } from 'native-base';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class ImagedetailScreen extends AbstractScreen
{
	/**
	 *
	 * @type {Loan}
	 */
	model = this.lendyooRegistry.loanCollection.getActiveModel();

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'ImagedetailScreen';
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		return (
			<Container style={{alignItems: 'center',}}>
				<Content style={{backgroundColor: '#000', }}>
				<Image
					style={{ width: AbstractScreen.width, height: AbstractScreen.width, }}
					source={{uri: 'https://api.lendyou.io/api-v2/photo/getloanimage/' + this.model._id + '/' + AbstractScreen.width}} />
				</Content>
			</Container>
		);
	}

}

const styles = StyleSheet.create({
});

export default ImagedetailScreen;