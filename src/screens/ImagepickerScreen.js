import React from 'react';
import {CameraRoll, Image, StyleSheet, View, TouchableHighlight} from 'react-native';
import {Container, Content, Icon,} from 'native-base';
import AbstractScreen from "./AbstractScreen";

/**
 *
 */
class ImagepickerScreen extends AbstractScreen
{
	state = {
		photos: [],
		index: null,
	};

	/**
	 *
	 */
	componentDidMount()
	{
		this.getPhotos();
	}

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
	 */
	getPhotos()
	{
		CameraRoll.getPhotos({
			first: 40,
			assetType: 'All'
		}).then(r => this.setState({photos: r.edges}))
	}

	/**
	 *
	 * @param index
	 */
	setIndex(index)
	{
		if (index === this.state.index)
		{
			index = null
		}
		this.setState({index});
		this.props.navigation.navigate('LendScreen');
	}


	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		// <Image style={{ width: AbstractScreen.width, height: AbstractScreen.width, }} source={require('../../images/contactDefault.png')}/>

		return (
			<Container style={{alignItems: 'center',}}>
				<Content style={{backgroundColor: '#000', flex: 1, width: '100%', paddingTop: 2, }}>
					<View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', /*justifyContent: 'center',*/ }}>
					{
						this.state.photos.map((p, i) =>
						{
							return (
								<TouchableHighlight
									style={{opacity: i === this.state.index ? 0.5 : 1}}
									key={i}
									underlayColor='transparent'
									onPress={() => this.setIndex(i)}>
									<Image style={{
											width: AbstractScreen.width / 3.3,
											height: AbstractScreen.width / 3.3,
											margin: 4,
											borderRadius: 3,
										}}
										   source={{uri: p.node.image.uri}}
									/>
								</TouchableHighlight>
							)
						})
					}
					</View>
				</Content>
			</Container>
		);
	}

}

const styles = StyleSheet.create({});

export default ImagepickerScreen;