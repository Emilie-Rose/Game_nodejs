const mongoose = require('mongoose');

// Schéma du personnage pour MongoDB avec Mongoose
const characterSchema = new mongoose.Schema({
    // Nom du personnage
    name: {
        type: String,
        required: true,
        unique: true
    },

    // URL de l'image du personnage
    picture: {
        type: String,
        required: true
    },

    // Caractéristiques du personnage
    strength: {
        type: Number,
        required: true
    },
    stamina: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },

    // Tableau de techniques du personnage
    techniques: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

// Création du modèle Character basé sur le schéma défini précédemment
const Character = mongoose.model('Character', characterSchema);

// Exportation du modèle Character pour l'utiliser dans d'autres fichiers
module.exports = Character;
