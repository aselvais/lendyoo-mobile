import LoanCollectionFrontend from '../shared/models/frontend/LoanCollection';
import Loan from './Loan';

/**
 * Collection of loans
 */
class LoanCollection extends LoanCollectionFrontend
{

	constructor()
	{
		super();
	}

	/**
	 *
	 */
	createNewLoan()
	{
		this.setActiveModel( new Loan() );
	}

}

export default LoanCollection;
