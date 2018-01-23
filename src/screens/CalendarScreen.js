import React from 'react';
import {StyleSheet, View, Text, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon, Container, Content } from 'native-base';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Loan from "../models/Loan";

/**
 *
 */
class CalendarScreen extends AbstractScreen
{
	/**
	 *
	 * @type {{selectedDate: Date}}
	 */
	state = {
		selectedDate: new Date()
	};

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
		return 'CalendarScreen';
	}

	/**
	 *
	 * @param day
	 */
	onDayPressed(day)
	{
		let nDate = new Date(day.year, day.month-1, day.day);
		if (this.model && this.model.dateExpiration) this.model.dateExpiration = nDate;
		this.setState({selectedDate: nDate}, () => this.props.navigation.goBack());
	}

	/**
	 *
	 * @returns {{}}
	 */
	getMarkedDates()
	{
		let sd = this.state.selectedDate;
		let d = {};
		let dStr = moment(sd).format('YYYY-MM-DD');
		d[dStr] = {selected: true};
		return d;
	}

	/**
	 *
	 * @returns {*}
	 */
	render()
	{
		return (
			<Container>
				<Content>
				<Calendar
					minDate={new Date()}
					onDayPress={(day) => this.onDayPressed(day)}
					markedDates={ this.getMarkedDates() }
				/>
				</Content>
			</Container>
		);
	}

}

const styles = StyleSheet.create({
});

export default CalendarScreen;
