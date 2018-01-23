import {observable} from 'mobx';

class Todo
{

	@observable title = 'Super title';

}

// exported as a singleton using the import caching
export default new Todo();

