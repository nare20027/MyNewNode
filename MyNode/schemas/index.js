const mongoose = require('mongoose');

const connect = () => {
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true);
	}
	mongoose.connect('mongodb://nare20027:963611@localhost:27017/admin')
}