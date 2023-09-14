const Character = require('../models/Character');

// Fonction pour créer un personnage
exports.createCharacter = async (req, res) => {
  const { name, picture, strength, stamina, defense, speed, techniques } = req.body;

  try {
    const character = await Character.create({
      name,
      picture,
      strength,
      stamina,
      defense,
      speed,
      techniques,
    });

    return res.status(201).json({ message: 'Personnage créé avec succès.', character });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du personnage. Veuillez réessayer.' });
  }
};

// Fonction pour récupérer la liste des personnages
exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des personnages.' });
  }
};

// Fonction pour récupérer un personnage par son ID
exports.getCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const character = await Character.findById(id);

    if (!character) {
      return res.status(404).json({ message: 'Personnage non trouvé.' });
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du personnage.' });
  }
};

// Fonction pour mettre à jour un personnage par son ID
exports.updateCharacterById = async (req, res) => {
  const { id } = req.params;
  const { name, picture, strength, stamina, defense, speed, techniques } = req.body;

  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      id,
      {
        name,
        picture,
        strength,
        stamina,
        defense,
        speed,
        techniques,
      },
      { new: true }
    );

    if (!updatedCharacter) {
      return res.status(404).json({ message: 'Personnage non trouvé.' });
    }

    res.json(updatedCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du personnage.' });
  } finally {
    console.log('La fonction updateCharacterById a été exécutée.');
  }
}

// Fonction pour supprimer un personnage par son ID
exports.deleteCharacterById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCharacter = await Character.findByIdAndDelete(id);

    if (!deletedCharacter) {
      return res.status(404).json({ message: 'Personnage non trouvé.' });
    }

    res.json({ message: 'Personnage supprimé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du personnage.' });
  }
};



