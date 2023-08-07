const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const {conn} = require('./db');
const router = require('./routes/routes.js');


const app = express();

dotenv.config();

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/', router);

conn.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log('Listen in Port 3001'); 
    });
  });
