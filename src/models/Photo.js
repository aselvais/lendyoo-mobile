import LoanFrontend from '../shared/models/frontend/Photo';
import {observable} from 'mobx';
import RNFetchBlob from "react-native-fetch-blob";

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
	@observable uploadprogress = '';

	/**
	 *
	 * @returns {Promise<T> | Promise<*> | *}
	 */
	uploadImage()
	{
		var _that = this;
		var _qurl = this.config.API_URL + '/api-v2/' + this.schemaName + '/uploadfile/';

		if (RNFetchBlob && this.localpath && this.localpath != '')
		{
			return RNFetchBlob.fetch('POST', _qurl, {
					'Content-Type': 'multipart/form-data'
				},
				[{name: this.name, filename: this._id + '.' + this.ext, data: RNFetchBlob.wrap(_that.localpath)}]
			)
				.uploadProgress((written, total) =>
				{
					let toret = {written: written, total: total, label: parseInt((written / total) * 100) + '%'};
					_that.uploadprogress = toret.label;
					return toret;
				})
				.progress((received, total) =>
				{
					let toret = {received: received, total: total};
					return toret;
				})
				.catch((err) =>
				{
					console.error(err);
				});
		}
	}

}

export default Photo;
