const express = require('express');
const routes = express.Router();

 
const NewController = require('./controllers/NewController');

routes.get('/api/unimed', NewController.index);
routes.post('/api/unimed', NewController.create);
//routes.put('/api/unimed', NewController.update);
routes.delete('/api/unimed', NewController.delete);


module.exports = routes;