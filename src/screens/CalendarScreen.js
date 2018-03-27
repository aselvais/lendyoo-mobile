import React from 'react';
import {StyleSheet, View, Text, } from 'react-native';
import AbstractScreen from "./AbstractScreen";
import { Icon, Container, Content } from 'native-base';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import Loan from "../models/Loan";
import {observer} from 'mobx-react/native';

/**
 *
 */
@observer
class CalendarScreen extends AbstractScreen
{

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
		this.lendyooRegistry.newLoan.loanExpirationDate = nDate;
		this.props.navigation.goBack();
	}

	/**
	 *
	 * @returns {{}}
	 */
	getMarkedDates()
	{
		let sd = this.lendyooRegistry.newLoan.loanExpirationDate;
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
		let {mindate} = this.props.navigation.state.params;
		return (
			<Container>
				<Content>
				<Calendar
					minDate={mindate ? mindate : new Date() }
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
