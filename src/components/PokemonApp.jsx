
import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from '../store/api/pokemonApi';
import styles from './styles/PokemonApp.module.css';

const PokemonApp = () => {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName, {
    skip: !pokemonName,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.elements.pokemon.value.trim().toLowerCase();
    setPokemonName(name);
  };

  return (
    <div className={styles.pokemonContainer}>
      <h2 className={styles.title}>Busca tu Pokemon</h2>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          name="pokemon"
          placeholder="Nombre Pokemon"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>

      {isLoading && <p>Cargando...</p>}
      {error && <p>Ocurrio un error. Intente nuevamente</p>}

      {/* Verificar que los datos estén disponibles antes de acceder a ellos */}
      {data && data.sprites ? (
        <div className={styles.result}>
          <h3 className={styles.pokemonName}>{data.name}</h3>
          <img
            src={data.sprites.front_default}
            alt={data.name}
            className={styles.pokemonImage}
          />
        </div>
      ) : (
        pokemonName && !isLoading && <p>No se encontro el Pokemon.</p>
      )}
    </div>
  );
};

export default PokemonApp;
