import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Configurer Axios pour envoyer les cookies
axios.defaults.withCredentials = true;

function LoginComponent() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:3005/api/login", user, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Gestion de la réponse du serveur
            if (response.status === 200 && response.data) {
                // Redirige vers la page profil ou une autre page appropriée après la connexion réussie
                localStorage.setItem('email', user.email);
                navigate('/profil');
            } else {
                setMessage(response.data.message);
            }

        } catch (error) {
            console.error("Erreur lors de la connexion:", error);
            setMessage("Erreur lors de la connexion");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="container">
            <div className="formContainer">
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
                <button onClick={login} className="button">Se connecter</button>
                <p className="message">{message}</p>
            </div>
        </div>
    );
}

export default LoginComponent;
