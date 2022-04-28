import React from 'react';
import '../style/Search.scss';

const Search = () =>{
    return(
        <div className="search">
        <div className="search-container">
        <div className="pika-container">
            <img src="./Pokemon.svg" alt="pika" className="pika" />
        </div>
        <div className="inputs">
            <section className="main-input">
            <p className="primary-p">Busca un Pokémon por su n ombre o por su numero en la pokédex</p>
            <div className="main-input-container">
                <input type="text" placeholder="Nombre" id="name-pok" className="input" />
            </div>
            <p className="secondary-p">Ingresa su nombre</p>
            <button className="primary-button">Buscar</button>
            <div className="main-input-container">
                <input type="number" placeholder="Numero" id="game-index-pok" className="input" />
            </div>
            <p className="secondary-p">Ingresa su número de la pokédex</p>
            <button className="primary-button">Buscar</button>
            </section>
        </div>
        </div>
        </div>
    );
}
export default Search;