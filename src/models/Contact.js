import ContactFrontend from '../shared/models/frontend/Contact';

/**
 * Contact model.
 * Person you can lend an item to
 *
 */
class Contact extends ContactFrontend
{

	constructor(data=null)
	{
		super(data);

		if (!this.id) this.id= '';
		if (!this.firstName) this.firstName = '';
		if (!this.lastName) this.lastName = '';
		if (!this.email) this.email = '';
		if (!this.picture) this.picture = '';
	}

	/**
	 *
	 * @returns {string}
	 */
	getFullName()
	{
		let n = '';
		if (this.firstName != '' || this.lastName != '') n = this.firstName + ' ' + this.lastName;
		if (this.name != '') n = this.name;
		if (n == '') n = this.email;
		return n;
	}

}

export default Contact;
