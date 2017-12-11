import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Title} from 'native-base';


/**
 *
 */
class AbstractScreen extends Component
{
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
					<Title>Header</Title>
					</Body>
					<Right/>
				</Header>
				<LinearGradient colors={['#FFFFFF', '#AAAAAA']} style={styles.linearGradient}>
					<Content>
						<Text style={styles.titleText}>
							{this.getTitle()}
						</Text>
					</Content>
				</LinearGradient>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	};

}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
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

export default AbstractScreen;