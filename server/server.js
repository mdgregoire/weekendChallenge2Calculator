console.log('hello from server');

const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.listen(port, function(){
  console.log(`server listeningon port ${port}`);
});
