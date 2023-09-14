// Importation du module express-session
const session = require('express-session');

// Configuration et exportation du middleware session pour une utilisation dans app.js
module.exports = session({
    secret: 'JWT_SECRET', // clé secret pour signer le cookie de session
    resave: false, // ne sauvegarde âs la session si elle n'est pas modifiée
    saveUninitialized: false, // ne sauvegarde pas une session vide
    cookie: {secure: false} // utiliser 'secure: true' en production (HTTPS)
    
});
