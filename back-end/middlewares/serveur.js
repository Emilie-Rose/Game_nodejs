const express = require('express');
const app = express();

// Importez les fichiers de route
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


// Routes de l'application
app.use('/', userRoutes);
app.get('/', (req, res) => {
    res.render('pages/home', { user: req.user });
});

// ... autres configurations de l'application

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});