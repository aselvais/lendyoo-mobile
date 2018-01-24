import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import { Container, Content, } from 'native-base';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';

/**
 *
 */
class ImagepickerScreen extends AbstractScreen
{
	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'ImagepickerScreen';
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
					source={require('../../images/contactDefault.png')}/>
				</Content>
			</Container>
		);
	}

}

const styles = StyleSheet.create({
});

export default ImagepickerScreen;