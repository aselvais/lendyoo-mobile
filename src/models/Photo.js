import LoanFrontend from '../shared/models/frontend/Photo';
import {observable} from 'mobx';

/**
 * Loan model
 */
class Photo extends LoanFrontend
{
	@observable Loan_id = null;
	@observable localpath = null;
	@observable serverpath = null;
	@observable filename = null;
	@observable name = null;
	@observable ext = null;
	@observable size = null;
	@observable width = null;
	@observable height = null;
	@observable data = null;

}

export default Photo;
