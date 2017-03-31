const schedule = require('node-schedule');
// const mongoose = require('mongoose');
const fetchHackerNewsAPI = require('./fetchHackerNewsAPI');
const scrapedData = require('../models/scrapedData');

// set up default mongoose connection
// get it working with mLab

// mongoose.Promise = global.Promise;
// const mongoDB = 'mongodb://localhost/codernews';
// mongoose.connect(mongoDB);

// // get the default connetion
// const db = mongoose.connection;

// //bind connection to error event
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const scheduleData = {
	scheduleJob: function() {
		// this rule is standard cron syntax for 
		// once every minute.
		// rule = '';

		// once every 15 mintues.
		rule = '*/15 * * * *';
		// mongoDB.remove({}, console.log("DB is clean"));

		scrapedData.remove({}, function(err,removed) {
		console.log("Clearing DB");
		});
		
		fetchHackerNewsAPI();
		

		const job = schedule.scheduleJob(rule, function() {

			// wiping database to only show latest articles
			

			//this is where the request call should be made to populate the db
			// fetchHackerNewsAPI();
			
		});
	},

	init: function() {
		scheduleData.scheduleJob();
	}
};



module.exports = scheduleData;

