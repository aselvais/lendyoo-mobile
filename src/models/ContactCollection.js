
import ContactCollectionFrontend from '../shared/models/frontend/ContactCollection';
import Contact from './Contact';

/**
 * Collection of contacts
 */
class ContactCollection extends ContactCollectionFrontend
{

	/**
	 *
	 */
	constructor()
	{
		super();
	}


	/**
	 *
	 * @param contacts
	 */
	setContacts( contacts=[] )
	{
		for (var i=0; i < contacts.length; i++)
		{
			this.addModel( new Contact(contacts[i]) );
		}
	}

}

export default ContactCollection;
