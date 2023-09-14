const express = require('express');
const router = express.Router();

// Importation des controllers
const characterController = require('../controllers/CharacterController');

// Importation des middlewares d'authentification
const { isLoggedIn } = require('../middlewares/auth.js');


// Route pour créer un personnage
router.post('/create', characterController.createCharacter);

// Route pour récupérer la liste des personnages
router.get('/list', characterController.getCharacters);

// Route pour récupérer un personnage par son ID
router.get('/:id', characterController.getCharacterById);

// Route pour mettre à jour un personnage par son ID
router.post('/:id', characterController.updateCharacterById);

// Route pour supprimer un personnage par son ID
router.delete('/:id', characterController.deleteCharacterById);

module.exports = router;
