import {observable} from 'mobx';

class Todo
{

	@observable toggled = true;
	@observable title = 'ABOUT';

}

// exported as a singleton using the import caching
export default new Todo();

