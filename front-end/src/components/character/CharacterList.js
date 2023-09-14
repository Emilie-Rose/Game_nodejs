import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('/api/characters').then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Liste des personnages</h1>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <img src={character.picture} alt={character.name} />
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
