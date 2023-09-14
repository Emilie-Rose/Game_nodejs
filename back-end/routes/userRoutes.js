var express = require('express');
var router = express.Router();

// importation des controllers 
const userController = require('../controllers/UserController');
const authController = require('../controllers/AuthController');
const characterController = require('../controllers/CharacterController');


// Importation des middlewares d'authentification
const { isLoggedIn, redirectIfLoggedIn} = require('../middlewares/auth.js');

// ====
// Routes liées à l'autentification
// ====

// Route pour afficher le formulaire d'inscription
//router.get('/register', authController.getRegister, redirectIfLoggedIn);

// Route pour soumettre le formulaire d'inscription
router.post('/register', authController.postRegister, redirectIfLoggedIn);

// Route pour afficher le formulaire de connexion
/* router.get('/login', authController.getLogin, redirectIfLoggedIn); //
 */
// Route pour soumettre le formulaire de connexion
router.post('/login', authController.postLogin, redirectIfLoggedIn);

// Route pour se déconnecter
router.get('/logout', authController.logout);



// ==
// Routes liées aux opérations de l'utilisateur  (profil)
// Ces routes nécessitent d'être connecté pour fonctionner
// ==

// route pour afficher le profil de l'utilisateur
router.get('/profil/:email', userController.getProfil, isLoggedIn) ;

// route pour modifier le profil de l'utilisateur
router.post('/profil', userController.updateProfil, isLoggedIn);

// route pour supprimer le profil de l'utilisateur
router.get('/delete', userController.deleteProfil, isLoggedIn);

module.exports = router;