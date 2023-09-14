import React from 'react';

import { Outlet, Link} from 'react-router-dom';

export const Header = () => {
    return (
        <>{/*  fragment */}
            <header>
                <nav>
                        <Link to="/">  Accueil  </Link>
                        <Link to="/register">  Inscription  </Link>
                        <Link to="/login">  Connection  </Link>
                        <Link to="/profil">  Profil  </Link>
                        <Link to="/logout">  Deconnection  </Link>
                </nav>
            </header>
            <section>
                <Outlet />
            </section>
        </>

    )
} 
 export default Header;