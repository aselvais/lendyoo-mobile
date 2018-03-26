import {AsyncStorage,} from 'react-native';

/**
 *
 */
class Lstorage
{
	_debugMode = __DEV__;
	_storekey = '@LendyouLocalStore:';


	/**
	 *
	 * @param login
	 * @param password
	 * @param selectedDate
	 * @returns {Promise<boolean>}
	 */
	async saveLoginParams(login='', password='', selectedDate = new Date())
	{
		let dd = {
			login: login,
			password: password,
			selectedDate: selectedDate
		};
		try
		{
			await AsyncStorage.setItem(this._storekey + 'LoginParams', JSON.stringify(dd));
			return true;
		} catch (error)
		{
			if (this._debugMode)
			{
				console.log('saveLoginParams error', error);
			}
			return false;
		}
	}

	/**
	 *
	 */
	async retrieveLoginParams()
	{
		try
		{
			const value = await AsyncStorage.getItem(this._storekey + 'LoginParams');
			if (value !== null)
			{
				let toret = JSON.parse(value);
				if (toret.login && toret.password)
					return toret;
				else
					return false;
			}
			else
			{
				if (this._debugMode)
				{
					console.log('retrieveLoginParams error no data');
				}
				return false;
			}
		} catch (error)
		{
			if (this._debugMode)
			{
				console.log('retrieveLoginParams error', error);
			}
			return false;
		}
	}

}

export default new Lstorage();
