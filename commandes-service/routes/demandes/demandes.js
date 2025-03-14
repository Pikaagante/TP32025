const express = require("express");
const router = express.Router();
const demandesController = require("./demandesController");

/**
 * @swagger
 * tags:
 *   name: Commandes
 *   description: Gestion des commandes
 */

/**
 * @swagger
 * /demandes/add:
 *   post:
 *     summary: Ajouter une commande
 *     tags: [Commandes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *               produit:
 *                 type: string
 *               quantite:
 *                 type: number
 *               dateCommande:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Commande ajoutée avec succès
 *       400:
 *         description: Tous les champs sont requis
 *       500:
 *         description: Erreur serveur
 */
router.post("/add", demandesController.addCommande);

/**
 * @swagger
 * /demandes/delete/{id}:
 *   delete:
 *     summary: Supprimer une commande par clientId
 *     tags: [Commandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Commande supprimée avec succès
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/delete/:id", demandesController.deleteCommande);

/**
 * @swagger
 * /demandes/update/{id}:
 *   put:
 *     summary: Mettre à jour une commande
 *     tags: [Commandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: string
 *               produit:
 *                 type: string
 *               quantite:
 *                 type: number
 *               dateCommande:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Commande mise à jour avec succès
 *       400:
 *         description: Tous les champs sont requis
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put("/update/:id", demandesController.updateCommande);

/**
 * @swagger
 * /demandes/get/{id}:
 *   get:
 *     summary: Récupérer une commande par clientId
 *     tags: [Commandes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Commande récupérée avec succès
 *       404:
 *         description: Commande non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/get/:id", demandesController.getCommandeById);

module.exports = router;
