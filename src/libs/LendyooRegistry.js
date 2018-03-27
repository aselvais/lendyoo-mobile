import { Platform } from 'react-native';
import Console from './Console';
import User from '../models/User';
import ContactCollection from '../models/ContactCollection';
import LoanCollection from '../models/LoanCollection';
import Loan from '../models/Loan';
import Photo from '../models/Photo';
import {observable} from 'mobx';

let instance = null;

/**
 * Application Registry singleton which will contain all the objects we
 * might need from anywhere in the app.
 *
 */
class LendyooRegistry
{
	@observable isNewLoan = true;
	@observable newLoan = new Loan();
	@observable newPhoto = new Photo();

	/**
	 *
	 * @returns {*}
	 */
	constructor()
	{
		if(!instance) {

			this.Console = new Console(true);
			this.platform = Platform.OS;
			// @todo write this with the buid and deployment process
			this.appVersion = '0.1.1';
			// date of singleton instanciation
			this.instanceTime = new Date();
			// The authenticated user
			this.user = new User();
			// this.user.setStoredData();
			this.contactCollection = new ContactCollection();
			this.loanCollection = new LoanCollection();
			this.loanCollection.createNewLoan();

			instance = this;
		}

		return instance;
	}

	/**
	 * Returns true if we are using IOS, or false if we assume we are on
	 * Android.
	 * @returns {boolean}
	 */
	isIOS()
	{
		if (this.platform === 'ios')
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/**
	 *
	 * @param v
	 */
	setNewLoanMode(v=true)
	{
		this.isNewLoan = v;
	}

	/**
	 *
	 */
	resetNewLoan()
	{
		this.newLoan = new Loan();
		this.newPhoto = new Photo();
	}



}


export default LendyooRegistry;
