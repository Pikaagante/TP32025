const Demande = require("./demandesModel");

exports.addCommande = async (req, res) => {
  try {
    console.log("Requête reçue avec body :", req.body);

    const { clientId, produit, quantite, dateCommande } = req.body;

    if (!clientId || !produit || !quantite || !dateCommande) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    const nouvelleCommande = new Demande({
      clientId,
      produit,
      quantite,
      dateCommande,
    });

    await nouvelleCommande.save();

    res.status(201).json({
      message: "Commande ajoutée avec succès",
      commande: nouvelleCommande,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.deleteCommande = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID de commande requis" });
    }

    const commandeSupprimee = await Demande.findOneAndDelete({ clientId: id });

    if (!commandeSupprimee) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    res.status(200).json({
      message: "Commande supprimée avec succès",
      commande: commandeSupprimee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.updateCommande = async (req, res) => {
  try {
    const { id } = req.params;
    const { clientId, produit, quantite, dateCommande } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID de commande requis" });
    }

    if (!clientId || !produit || !quantite || !dateCommande) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    const commandeExistante = await Demande.findById(id);

    if (!commandeExistante) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    commandeExistante.clientId = clientId;
    commandeExistante.produit = produit;
    commandeExistante.quantite = quantite;
    commandeExistante.dateCommande = dateCommande;

    await commandeExistante.save();

    res.status(200).json({
      message: "Commande mise à jour avec succès",
      commande: commandeExistante,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.getCommandeById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID de commande requis" });
    }

    const commande = await Demande.findById(id);

    if (!commande) {
      return res.status(404).json({ message: "Commande non trouvée" });
    }

    res.status(200).json({ commande });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
