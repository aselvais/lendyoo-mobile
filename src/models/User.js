import UserFrontend from '../shared/models/frontend/User';
let instance = null;

/**
 * The application registered used.
 * This is a singleton
 */
class User extends UserFrontend
{

	/**
	 *
	 * @param data
	 * @returns {*}
	 */
	constructor(data={})
	{
		if(!instance){
			super(data);
			if (!this.instanceTime) this.instanceTime = new Date();
			if (!this.creationDate) this.creationDate = new Date();
			if (!this.lastLogin) this.lastLogin = new Date();
			if (!this.isRegistered) this.isRegistered = false;
			if (!this.id) this.id = '';
			if (!this.username) this.username = '';
			if (!this.fname) this.fname = '';
			if (!this.lname) this.lname = '';
			if (!this.dob) this.dob = '';
			if (!this.gender) this.gender = '';
			if (!this.password) this.password = '';
			if (!this.password2) this.password2 = '';
			if (!this.email) this.email = '';
			if (!this.lang) this.lang = 'en';
			instance = this;
		}
		return instance;

	}

	/**
	 * Will set the data stored on disk in this model
	 */
	reset()
	{
		this.isRegistered = false;
		this.username = '';
		this.password = '';
		this.fname = '';
		this.lname = '';
		this.gender = 'M';
		this.email = '';
	}

	/**
	 * Returns the first and last name combined
	 * @returns {string}
	 */
	getFullName()
	{
		return this.fname + ' ' + this.lname;
	}



}

export default User;
