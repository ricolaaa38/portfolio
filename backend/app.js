const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const formRoute = require('./routes/form')
dotenv.config()

const app = express();

mongoose.connect(process.env.MON_ID_MONGODB,
  // warning "deprecated option"
    // { useNewUrlParser: true,
    //   useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

    app.use(express.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://nicolas-cretton.com');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      });  

app.use("/api/formulaire", formRoute);

module.exports = app;