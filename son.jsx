import React from 'react';
import PropTypes from 'prop-types'; // Asegúrate de tener instalada esta dependencia

const Son = React.memo(function SonComponent({ numero, increment }) {
    console.log('again reloaded...');
    return (
      <button
        className='btn btn-primary mr-3'
        onClick={() => increment(numero)}
      >
        {numero}
      </button>
    );
  });

// Validación de tipos de las props
Son.propTypes = {
  numero: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Son;
