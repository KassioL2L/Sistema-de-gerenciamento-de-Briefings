const express = require("express");
const router = express.Router();
const briefingController = require("../controller/briefingController");

// Rota para criar um novo briefing
router.post("/", briefingController.createBriefing);

// Rota para listar todos os briefings
router.get("/", briefingController.getAllBriefings);

// Rota para obter um briefing por ID
router.get("/:id", briefingController.getBriefingById);

// Rota para atualizar um briefing por ID
router.put("/:id", briefingController.updateBriefingById);

// Rota para excluir um briefing por ID
router.delete("/:id", briefingController.deleteBriefingById);

module.exports = router;
