const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI_RATP, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"))
  .catch(err => console.error("Erreur de connexion MongoDB :", err));

// Importation des routes
const demandesRoutes = require('./routes/demandes/demandes');
app.use('/demandes', demandesRoutes);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
