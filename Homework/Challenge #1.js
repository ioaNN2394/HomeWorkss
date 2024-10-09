// Función regular
function checkEvenOddRegular(number) {
    if (number % 2 === 0) {
        console.log(`El número ${number} es par.`);
    } else {
        console.log(`El número ${number} es impar.`);
    }
}

// Llamada de ejemplo para la función regular
checkEvenOddRegular(4); 
checkEvenOddRegular(7); 


// Función de flecha (Arrow Function)
const checkEvenOddArrow = (number) => {
    if (number % 2 === 0) {
        console.log(`El número ${number} es par.`);
    } else {
        console.log(`El número ${number} es impar.`);
    }
};

// Llamada de ejemplo para la Arrow Function
checkEvenOddArrow(4); 
checkEvenOddArrow(7); 
