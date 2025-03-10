const express = require('express');
const router = express.Router();
const demandesController = require('./demandesController');

router.post('/add', demandesController.addCommande);

router.delete('/delete/:id', demandesController.deleteCommande);

// put

// get

// TODO: Swagger

module.exports = router;
