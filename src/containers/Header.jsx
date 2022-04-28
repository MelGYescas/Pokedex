import React from 'react';
import '../style/Header.scss';

const Header = () =>{
    return(
        <div>
            <header>
                <img src="../images" alt="menu" className="menu" />
                <div className="navbar">
                <img src="../../asset/icon_menu.svg" alt="logo" className="logo" />
                <ul>
                    <li><a href="/">Acerca</a></li>
                    <li><a href="/">Buscar</a></li>
                    <li><a href="/">Pokémon</a></li>
                </ul>
                </div>
            </header>
        </div>

    );
}

export default Header;