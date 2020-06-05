
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

const {contactMessagesRouter} = require('./routes/contact-messages-route');
const {contactsRouter} = require('./routes/contact-route');
const {schedulesRouter} = require('./routes/schedule-route');
const {teamsRouter} = require('./routes/team-route');
const {usersRouter} = require('./routes/user-route');
//const {authorization} = require('./auth');
 
const corsOptions = {
  origin: '*',
  allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
  credentials: true,
  enablePreflight: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(authorization);


app.use('/assets/schedule',express.static(__dirname + '/assets/schedule'));
app.use('/assets/team',express.static(__dirname + '/assets/team'));
app.use('/Schedules',schedulesRouter);
app.use('/ContactMessage',contactMessagesRouter);
app.use('/Contacts',contactsRouter);
app.use('/Teams',teamsRouter);
app.use('/Users',usersRouter);
app.use('/', (req,res,next)=>{

  res.send("welcome");
  next();
 
});

const port = 2404;
app.listen(port,()=>{
    console.log('====  Server started ==== now you can listen to it in http://localhost:'+port.toString())
})