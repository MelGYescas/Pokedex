import React from 'react';
import '../style/Headerfooter.scss';

const Headerfooter = () =>{
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
            <footer>
                <p>Hecho con ❤ <a href="https://github.com/MelGYescas">Mariel G Yescas</a></p>
            </footer>
        </div>

    );
}

export default Headerfooter;