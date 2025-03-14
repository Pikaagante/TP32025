const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

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

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Commandes",
      version: "1.0.0",
      description: "Documentation de l'API pour la gestion des commandes",
    },
    servers: [{ url: `http://localhost:${port}` }]
  },
  apis: ["./routes/demandes/demandes.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importation des routes
const demandesRoutes = require('./routes/demandes/demandes');
app.use('/demandes', demandesRoutes);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
