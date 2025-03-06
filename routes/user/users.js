const express = require('express');
const UsersController = require('./usersController');

module.exports = (db) => {
  const router = express.Router();

  /**
   * @swagger
   * /users/userId/{id}:
   *   get:
   *     summary: Retrieve a user by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: olThe user IDs
   *     responses:
   *       200:
   *         description: A user object
   *       404:
   *         description: User not found
   */
  router.get('/userId/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Recherche de l'utilisateur avec ID: ${userId}`);
    UsersController.GetClientById(db, { id: userId }, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'utilisateur:', err);
        res.status(500).send('Erreur serveur: ' + err.message);
        return;
      }

      if (results.length === 0) {
        res.status(404).send('Utilisateur non trouvé');
        return;
      }

      res.json(results[0]);
    });
  });

  /**
   * @swagger
   * /users/DelUserId/{id}:
   *   delete:
   *     summary: Delete a user by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The user ID
   *     responses:
   *       200:
   *         description: User deleted successfully
   *       404:
   *         description: User not found
   */
  router.delete('/DelUserId/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Suppression de l'utilisateur avec ID: ${userId}`);
    UsersController.DeleteClientbyId(db, { id: userId }, (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', err);
        res.status(500).send('Erreur serveur: ' + err.message);
        return;
      }

      res.json({ message: 'Utilisateur supprimé avec succès' });
    });
  });

  /**
   * @swagger
   * /users/UpdateUserId:
   *   put:
   *     summary: Update a user's name by ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: integer
   *               name:
   *                 type: string
   *     responses:
   *       200:
   *         description: User updated successfully
   *       404:
   *         description: User not found
   */
  router.put('/UpdateUserId', (req, res) => {
    const { id, name } = req.body;
    console.log(`Mise à jour de l'utilisateur avec ID: ${id}`);
    UsersController.UpdateNameClientbyId(db, { name, id }, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'utilisateur:', err);
        res.status(500).send('Erreur serveur: ' + err.message);
        return;
      }

      res.json({ message: 'Utilisateur mis à jour avec succès' });
    });
  });

  /**
   * @swagger
   * /users/AddUserId:
   *   post:
   *     summary: Add a new user
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: integer
   *               name:
   *                 type: string
   *               surname:
   *                 type: string
   *               num:
   *                 type: integer
   *               mail:
   *                 type: string
   *     responses:
   *       200:
   *         description: User added successfully
   */
  router.post('/AddUserId', (req, res) => {
    const { id, name, surname, num, mail } = req.body;
    console.log(`Ajout d'un nouvel utilisateur avec ID: ${id}`);
    UsersController.AddClient(db, { id, name, surname, num, mail }, (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
        res.status(500).send('Erreur serveur: ' + err.message);
        return;
      }

      res.json({ message: 'Utilisateur ajouté avec succès' });
    });
  });

  return router;
};