const express = require('express');
const schedulesRouter = require('./routes/schedules.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// body parser
app.use(bodyParser.urlencoded({extended:false})); // body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.json()); // body-parser를 사용해 application/json 파싱

// template engine
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('resource'));

// router
app.use('/schedules',schedulesRouter);

app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(port, () => console.log(`app listening on port ${port}!`));