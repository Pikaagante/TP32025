const express = require("express");
const router = express.Router();
const demandesController = require("./demandesController");

router.post("/add", demandesController.addCommande);

router.delete("/delete/:id", demandesController.deleteCommande);

router.put("/update/:id", demandesController.updateCommande);

router.get("/get/:id", demandesController.getCommandeById);

// nouveau
router.put("/update-partial/:id", demandesController.updateCommandePartielle);
// fin 

// TODO: Swagger

module.exports = router;
