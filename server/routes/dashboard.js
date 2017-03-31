var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next)	{
	
	if ( process.env.NODE_ENV === 'production' ) {

	    res.render('dashboard');
	    // app.use(express.errorHandler());
	}
	res.send('it worked')
	
});

module.exports = router;