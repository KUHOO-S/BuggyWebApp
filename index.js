require('dotenv').config();
const port = process.env.PORT || 3000;


var express=require('express')
var bodyParser=require('body-parser');

var app=express();

app.set('view engine','ejs');

var urlencoded=bodyParser.urlencoded({extended:false});

app.use(express.static('./public'));

var appController=require('./controllers/appController');

appController(app);

app.listen(port, () => {
    console.log(`server started at ${port}`);
});


