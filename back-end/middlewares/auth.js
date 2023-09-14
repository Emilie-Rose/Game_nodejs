const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Middleware pour verifier si l'utilisateur est connecté
 * si l'utilisateur est connecté (token valide), il continue vers la route/ middleware suivante
 * sinon est est redirigé vers la page de connection 
**/

function isLoggedIn(req, res, next) {
    const token = req.cookie.token;
    // si le token n'est pas valide on est rediriger sur la page login
    if (!token) return res.redirect('/login');

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err) {
            res.clearCookie('token'); // supprimer le cookie token invalide ou expiré
            return res.redirect('/login');
        }
        res.user = decodedUser; // decode le token et extrait les données de l'utilisateur
        next();
    });
}
/**
 * Middleware pour rediriger l'utlisateur s'il est déja connecté
 * Si l'utilisateur est connecté (token valisde) indiriger vers la page profil
 * sinon il continue vers la route/middleware suivante
 */
function redirectIfLoggedIn(req, res, next) {
    const token = req.cookie.token;
    if (!token) return next(); // si l'utilisateur n'a pas de token, il continue vers la route/middleware suivante
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (!err && decodedUser) {
            return res.redirect('/profil'); // si le token est valide, on redirige vers la page profil
            
        }
        next(); // si le token n'est pas valide, on continue vers la route/middleware suivante
    });

}

module.exports = { 
    isLoggedIn, 
    redirectIfLoggedIn 
};