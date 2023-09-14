import { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../src/service/demo_data.json';
// Configurer Axios pour envoyer les cookies
axios.defaults.withCredentials = true;
console.log(data);
function ProfilComponent() {
  const [user, setUser] = useState({});
  const [character, setCharacter] = useState(null);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    picture: '',
    strength: '',
    stamina: '',
    defense: '', speed: '',
    techniques: [],
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    const fetchUser = async () => {
      // Envoyer la requête GET pour récupérer les informations de l'utilisateur
      try {
        const reponse = await axios.get("http://localhost:3005/api/profil/" + email)
        console.log(reponse.data);
        setUser(reponse)
      } catch (error) {
        console.error(error);
      }
    }
     const fetchCharacter = async () => {
      // Envoyer la requête GET pour récupérer la liste des personnages
      try {
        const characterResponse = await axios.get("http://localhost:3005/api/profil/");
        setCharacter(characterResponse.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
    fetchCharacter();
  }, [])

  const handleCharacterInputChange = (e) => {
    const { name, value } = e.target;
    setNewCharacter({
      ...newCharacter,
      [name]: value,
    });
  };

  const handleAddTechnique = () => {
    const techniques = [...newCharacter.techniques, ''];
    setNewCharacter({
      ...newCharacter,
      techniques,
    });
  };

  const handleTechniqueChange = (e, index) => {
    const techniques = [...newCharacter.techniques];
    techniques[index] = e.target.value;
    setNewCharacter({
      ...newCharacter,
      techniques,
    });
  };

  const handleCreateCharacter = async () => {
    try {
      
      // Envoyer la requête POST pour créer un nouveau personnage
      await axios.post("http://localhost:3005/api/profil/", newCharacter);
      // Réinitialiser le formulaire après la création réussie
      setNewCharacter({
        name: '',
        picture: '',
        strength: '',
        stamina: '',
        defense: '',
        speed: '',
        techniques: [],
      });
      
      // Rafraîchir la liste des personnages si il y a des personnage 
      if (character) {
        const characterResponse = await axios.get("http://localhost:3005/api/profil/");
        setCharacter(characterResponse.data);
      }
      //fetchCharacter();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="container">
      {
        <div className="profil-container">

          <h2>Bonjour, {user.data && user.data.email} !</h2>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <div className="character-list">
            <h3>Mes personnages</h3>
            <div className="character-list-content">
          </div> </div>
          
          <div className="perso-content">
            <h3>Créer un personnage</h3>
            <form className="perso-form">
              <input
                type="text"
                name="name"
                value={newCharacter.name}
                onChange={handleCharacterInputChange}
                placeholder="Nom du personnage"
                className="input"></input> 
              <input
                type="text"
                name="picture"
                value={newCharacter.picture}
                onChange={handleCharacterInputChange}
                placeholder="URL de l'image"
                className="input"></input>
              <input
                type="number"
                name="strength"
                value={newCharacter.strength}
                onChange={handleCharacterInputChange}
                placeholder="Force"
                className="input"></input>
              <input
                type="number"
                name="stamina"
                value={newCharacter.stamina}
                onChange={handleCharacterInputChange}
                placeholder="Endurance"
                className="input"></input>
              <input
                type="number"
                name="defense"
                value={newCharacter.defense}
                onChange={handleCharacterInputChange}
                placeholder="Défense"
                className="input"></input>
              <input
                type="number"
                name="speed"
                value={newCharacter.speed}
                onChange={handleCharacterInputChange}
                placeholder="Vitesse"
                className="input"></input>
              <div className="techniques">

                {newCharacter.techniques.map((technique, index) => (
                  <input
                    key={index}
                    type="text"
                    value={technique}
                    onChange={(e) => handleTechniqueChange(e, index)}
                    placeholder="Technique"
                    className="input"></input>
                ))}

              </div>
              <button type="button" onClick={handleAddTechnique} className="button">Ajouter une technique</button>
              <button type="button" onClick={handleCreateCharacter} className="button">Créer le personnage</button>
              </form>
            </div>
        </div>

        
       }
    </div>
  );
}

export default ProfilComponent;
