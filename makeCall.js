require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);


client.calls.create({

    from:'+12084874496',

    to: '+50662013047',

    url:'http://demo.twilio.com/docs/voice.xml'  

},function(err, call){

    if(err){

        console.log(err);

    }else{

        console.log(call.sid);

    }

});