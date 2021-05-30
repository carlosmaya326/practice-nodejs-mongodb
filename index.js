const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.db, (err, res) => {
	if(err){
		console.log(`Error connect database ${err}`);
	}else{
		console.log('Connected database');
	}

	app.listen(config.port, () => {
		console.log(`API running on http://localhost:${config.port}`);
	});
});