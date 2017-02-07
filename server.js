var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var contacts = [{
    "name":"Rathan Tata",
    "age":60,
    "occupation":"TATA SON",
    "email":"rathan@tcs.com"
},{
    "name":"JRD Tata",
    "age":100,
    "occupation":"TATA",
    "email":"jrd@tcs.com"
},{
    "name":"Chandrasekar",
    "age":50,
    "occupation":"TATA Chairman",
    "email":"Chandrasekar@tcs.com"
}];

app.get('/contacts',function(req,res){
	res.status(200).json(contacts);
})

app.listen(9001);
