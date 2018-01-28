import React, {Component} from 'react';
import {Dimensions, Text, View, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title, Root, Card, CardItem, } from 'native-base';

import LendyooRegistry from '../libs/LendyooRegistry';

import styles from './GlobalStyles';
import Console from "../libs/Console";
import User from "../models/User";
import Loan from "../shared/models/frontend/Loan";

/**
 *
 */
class AbstractScreen extends Component
{
	static width = Dimensions.get('window').width;
	static height = Dimensions.get('window').height;
	static _styles = styles;

	/**
	 * @type {LendyooRegistry}
	 */
	lendyooRegistry = new LendyooRegistry();
	/**
	 * @type {Console}
	 */
	console = this.lendyooRegistry.Console;
	/**
	 * @type {User}
	 */
	user = this.lendyooRegistry.user;
	/**
	 * @type {LoanCollection}
	 */
	loanCollection = this.lendyooRegistry.loanCollection;
	/**
	 * @type {Loan}
	 */
	loan = this.lendyooRegistry.loanCollection.getActiveModel();
	/**
	 *
	 * @type {string}
	 */
	appTitle = 'iLENDyou';

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
	 * @returns {*}
	 */
	getbarCodeWindowJSX(title='', msg='', showButton=true)
	{
		if (this.state.showWinpopupInfo)
		return (
			<View style={styles.overlayLayer}>
				<View style={styles.overlayLayer1}>
					<Card>
						<CardItem header>
							<Text style={{fontSize: 18, fontWeight: 'bold', }}>{title}</Text>
						</CardItem>
						<CardItem>
							<Body>
							<Text>{msg + "\n\n"}</Text>
							</Body>
						</CardItem>
						{
							(showButton) ? (
								<TouchableOpacity onPress={() => this.setState({showWinpopupInfo: false})}>
									<View style={[styles.buttonOrangeContainer, {padding: 7,}]}>
										<Text style={styles.buttonTextColor}>OK</Text>
									</View>
								</TouchableOpacity>
							) : null
						}
					</Card>
				</View>
				<View>
					<View style={styles.overlayLayer2}/>
				</View>
			</View>
		);
		else
			return null;
	}

	/**
	 *
	 * @returns {XML}
	 */
	render()
	{
		return (
			<Root>
			<Container>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerToggle')}>
							<Icon name='menu'/>
						</Button>
					</Left>
					<Body>
					<Title>{this.appTitle}</Title>
					</Body>
					<Right/>
				</Header>
				<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={AbstractScreen._styles.linearGradient}>
					{this.getContent()}
				</LinearGradient>
				{this.getFooter()}
			</Container>
			</Root>
		);
	};

}

export default AbstractScreen;