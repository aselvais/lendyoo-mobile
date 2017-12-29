import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title} from 'native-base';

import styles from './GlobalStyles';

/**
 *
 */
class AbstractScreen extends Component
{
	width = Dimensions.get('window').width;
	height = Dimensions.get('window').height;
	static _styles = styles;

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'AbstractScreen';
	}

	/**
	 *
	 * @returns {*}
	 */
	getFooter()
	{
		return null;
		/* return (
			<Footer>
			<FooterTab>
				<Button full>
					<Text>Footer</Text>
				</Button>
			</FooterTab>
		</Footer>
		); */
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		return (
			<Content>
				<Text style={AbstractScreen._styles.titleText}>
					{this.getTitle()}
				</Text>
			</Content>
		);
	}

	/**
	 *
	 * @returns {XML}
	 */
	render()
	{
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerToggle')}>
							<Icon name='menu'/>
						</Button>
					</Left>
					<Body>
					<Title>iLendYou</Title>
					</Body>
					<Right/>
				</Header>
				<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={AbstractScreen._styles.linearGradient}>
					{this.getContent()}
				</LinearGradient>
				{this.getFooter()}
			</Container>
		);
	};

}

export default AbstractScreen;