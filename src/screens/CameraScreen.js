import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Card, CardItem, Icon,} from 'native-base';
import Camera from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';

/**
 *
 */
class CameraScreen extends AbstractScreen
{
	state = {
		showBarcodeInfo: false,
	};

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'Camera';
	}

	/**
	 *
	 * @param d
	 */
	onBarCodeRead(d)
	{
		console.log(d);
	}

	/**
	 *
	 */
	pressTakePicture()
	{
		// get localisation
		try
		{
			navigator.geolocation.getCurrentPosition(
				(position) =>
				{
					this.lendyooRegistry.newLoan.geolocation = {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						error: null,
					};
				},
				(error) => console.log({error: error.message}),
				{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
			);
		} catch (err)
		{
			console.log(err);
		}
		// taking a picture
		const options = {};
		this.camera.capture({metadata: options})
			.then((data) =>
			{
				if (data.mediaUri) this.lendyooRegistry.newLoan.mediaUri = data.mediaUri;
				if (data.path) {
					this.lendyooRegistry.newLoan.path = data.path;
					this.lendyooRegistry.newLoan.photo = data.path;
					this.lendyooRegistry.newPhoto.localpath = data.path;
				}
				try
				{
					RNFetchBlob.fs.readFile(data.path, 'base64').then(
						(dd) =>
						{
							this.lendyooRegistry.newPhoto.data = dd;
							this.lendyooRegistry.newPhoto.initImageSize();
							this.lendyooRegistry.newPhoto.initFilename();
							this.props.navigation.goBack();
						}
					);
				} catch (err)
				{
					console.log(err);
				}

			})
			.catch(err => console.error(err));
	}

	/**
	 *
	 */
	pressGallery()
	{
		this.props.navigation.navigate('ImagepickerScreen');
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		return (
			<View style={styles.globalContainer}>
				<View style={{flex: 1}}>
					<Camera ref={(cam) => this.camera=cam}
							style={styles.cameraWidget} onBarCodeRead={(d) => this.onBarCodeRead(d)}/>
				</View>
				<View style={styles.iconMainContainer}>
					<TouchableOpacity onPress={() => this.setState({showBarcodeInfo: true})}>
						<View style={styles.iconContainer}><Icon name="ios-barcode-outline" style={styles.photoIcon}/>
							<Text style={styles.textLabels}>Barcode</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.pressTakePicture()}>
						<View style={styles.iconContainer}><Icon name="ios-camera-outline"
																 style={[styles.photoIcon, styles.cameraIcon]}/>
							<Text style={styles.textLabels}>Take picture</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.pressGallery()}>
						<View style={styles.iconContainer}><Icon name="ios-image-outline" style={styles.photoIcon}/>
							<Text style={styles.textLabels}>Gallery</Text>
						</View>
					</TouchableOpacity>
				</View>
				{(this.state.showBarcodeInfo) ? this.getbarCodeWindowJSX("Barcode", "You can just point the camera to a barcode " +
					"and you will see an alert with suggestion as what the article is." +
					"\n\nOne done, you can just take a picture of the article you are lending.") : null}
			</View>
		);
	}
}

const _localStyles = StyleSheet.create({
	globalContainer: {
		flex: 1,
		justifyContent: 'space-around',
		backgroundColor: '#000',
	},
	cameraWidget: {
		width: '100%',
		height: '100%',
	},
	iconMainContainer: {
		// flex: 2,
		height: 80,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},
	iconContainer: {
		width: (AbstractScreen.width / 3),
		height: '100%',
		paddingBottom: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	photoIcon: {
		fontSize: 40,
		color: 'rgba(255,255,255,.8)',
	},
	cameraIcon: {
		fontSize: 60,
		color: 'rgba(255,255,255,1)',
	},
	textLabels: {
		color: '#FFF',
		fontSize: 10,
		textAlign: 'center',
	},
});
const styles = {...AbstractScreen._styles, ..._localStyles};
export default CameraScreen;