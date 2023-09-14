import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Configurer Axios pour envoyer les cookies
axios.defaults.withCredentials = true;

function RegisterComponent() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const register = async () => {
        console.log("coucou");
        console.log(user);
        try {
            const response = await axios.post("http://localhost:3005/api/register", user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            // Gestion de la réponse du serveur
            if (response.status === 201 && response.data) {
                // redirige vers page login sinon message erreur 
                navigate('/login');
            } else {
                setMessage(response.data.message);
            }

        } catch (error) {
            console.error("Erreur lors de l'inscription:", error);
            setMessage("Erreur lors de l'inscription");
        }   
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <div className="formContainer">
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    placeholder="Nom d'utilisateur"
                    className="input"
                />
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Mot de passe"
                    className="input"
                />
                <button onClick={register} className="button">S&apos;inscrire</button>
                <p className="message">{message}</p>
            </div>
        </div>
    );
}

export default RegisterComponent;
