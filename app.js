const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
const assisstances = require('./routes/assisstances');
const technologies = require('./routes/technologies');
const users = require('./routes/users');

//Connection with MySQL
const connection = require('./config/database');

//Models
const Assisstance = require('./models/assisstance');
const Technologie = require('./models/technologie');
const User = require('./models/user');


const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/assisstances',assisstances)
app.use('/technologies',technologies)
app.use('/users',users)

Assisstance.belongsTo(Technologie)
Technologie.hasMany(Assisstance)


User.hasMany(Assisstance);
Assisstance.belongsTo(User);

connection.sync()
          .then(result => {

              app.listen(5000, () => console.log('Server ON'))
          })
          .catch((err) => {
              console.log('error: ', err)
          })
