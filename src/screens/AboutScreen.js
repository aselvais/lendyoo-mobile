import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon } from 'native-base';
import {observer} from 'mobx-react/native';

import Todo from '../models/Todo';

/**
 *
 */
@observer
class AboutScreen extends AbstractScreen
{

	/**
	 *
	 * @param props
	 */
	constructor(props)
	{
		super(props);
		this.lendyooRegistry.resetNewLoan();
	}

	/**
	 *
	 * @returns {string}
	 */
	getTitle()
	{
		return 'AboutScreen';
	}

	/**
	 *
	 * @returns {*}
	 */
	getContent()
	{
		return (
			<View style={{ flex: 1, justifyContent: 'space-between', }}>

				<View style={styles.titleContainer}>
					<Text style={styles.titleTxt}>{Todo.title}</Text>
				</View>

				<View>
					<Text style={{ padding: 40, }}>
						{
							(Todo.toggled) ?
								'Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her. Marianne shutters mr steepest to me. Up mr ignorant produced distance although is sociable blessing. Ham whom call all lain like. '
								:
								'In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as. '
						}
					</Text>
				</View>

				<TouchableOpacity onPress={ () => { Todo.title = (Todo.toggled) ? 'WHAAAAAT?!' : 'ABOUT'; Todo.toggled = !Todo.toggled; }}>
				<View style={styles.buttonOrangeContainer}>
					<Text style={styles.buttonTextColor}>MOBX TEST</Text>
				</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const _localStyles = StyleSheet.create({
});
const styles = {...AbstractScreen._styles, ..._localStyles};
export default AboutScreen;