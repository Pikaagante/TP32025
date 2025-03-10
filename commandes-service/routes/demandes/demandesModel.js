const mongoose = require('mongoose');

const demandeSchema = new mongoose.Schema({
  clientId: { type: String, required: true },
  produit: { type: String, required: true },
  quantite: { type: Number, required: true },
  dateCommande: { type: Date, required: true }
});

module.exports = mongoose.model('Demande', demandeSchema);
