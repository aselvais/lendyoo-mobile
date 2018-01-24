import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';
import Camera from 'react-native-camera';
/**
 *
 */
class CameraScreen extends AbstractScreen
{
	getTitle()
	{
		return 'CameraScreen';
	}

	render()
	{
		return (
			<View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#000', }}>
				<Camera />
				<Text style={{ color: '#FFF', padding: 50, fontSize: 20, }}>
					Camera and access to the gallery will come here...
				</Text>
			</View>
		);
	}
}

const _localStyles = StyleSheet.create({
});
const styles = {...AbstractScreen._styles, ..._localStyles};
export default CameraScreen;