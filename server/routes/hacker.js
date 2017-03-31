var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const scrapedData = require('../models/scrapedData');

router.get('/', function(req, res, next)	{
    
	scrapedData.find({}, function(err, scrapeddatas) {
        // console.log("HITTING HERE");
        // console.log('=============', Array.isArray(scrapeddatas))

        if(err) {
           console.log('Error!!');
        } else {
            // console.log(scrapeddatas);
            const data = scrapeddatas.reduce( function(obj, story){
                const topic = story.topic
                
                if(!obj[topic]) {
                    obj[topic] = [story]
                }
                else {
                    obj[topic].push(story)
                }

                return obj
            }, {});
            res.json(data);
        }
    });

});

module.exports = router;