import LoanFrontend from '../shared/models/frontend/Loan';
import {observable} from 'mobx';

/**
 * Loan model
 */
class Loan extends LoanFrontend
{
	@observable id = '';
	@observable fromId = null;
	@observable toId = null;
	@observable photo = null;
	@observable isSaved = false;
	@observable title = '';
	@observable detail = '';
	@observable loanDate = new Date();
	@observable loanExpirationDate = new Date();
	@observable lastReminderSent = '';
	@observable sendReminders = true;
	@observable remindersFrequency = 7;
	@observable mediaUri = null;
	@observable path = null;
	@observable geolocation = null;

	/**
	 *
	 * @param data
	 */
	constructor(data={})
	{
		super(data);
		this.loanExpirationDate = new Date(this.loanDate.getFullYear(), this.loanDate.getMonth(), this.loanDate.getDate()+15)
	}

	/**
	 *
	 */
	setDefaultExpirationDate()
	{
		this.loanExpirationDate = this.loanDate.setMonth(this.loanDate.getMonth()+2);
	}

}

export default Loan;
