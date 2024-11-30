// Uso de todas las funciones para Arrays en JavaScript

// Definimos un array inicial de ejemplo
const array = [1, 2, 3, 4, 5];

// 1. at()
console.log("at():", array.at(2)); // Devuelve el elemento en la posición 2 (index 2)

// 2. concat()
const concatenatedArray = array.concat([6, 7, 8]);
console.log("concat():", concatenatedArray);

// 3. copyWithin()
const copyWithinArray = array.slice(); // Crear una copia para evitar modificar el original
copyWithinArray.copyWithin(0, 3);
console.log("copyWithin():", copyWithinArray);

// 4. entries()
const entries = array.entries();
for (const entry of entries) {
    console.log("entries():", entry);
}

// 5. every()
const allAboveZero = array.every(num => num > 0);
console.log("every():", allAboveZero);

// 6. fill()
const filledArray = array.slice(); // Crear una copia para evitar modificar el original
filledArray.fill(0, 2, 4);
console.log("fill():", filledArray);

// 7. filter()
const filteredArray = array.filter(num => num > 2);
console.log("filter():", filteredArray);

// 8. find()
const foundElement = array.find(num => num === 3);
console.log("find():", foundElement);

// 9. findIndex()
const foundIndex = array.findIndex(num => num === 3);
console.log("findIndex():", foundIndex);

// 10. findLast()
const findLast = array.findLast(num => num < 5);
console.log("findLast():", findLast);

// 11. findLastIndex()
const findLastIndex = array.findLastIndex(num => num < 5);
console.log("findLastIndex():", findLastIndex);

// 12. flat()
const flatArray = [1, [2, 3], [4, [5]]].flat(2); // Se cambió a 2 niveles de profundidad
console.log("flat():", flatArray);

// 13. flatMap()
const flatMapArray = array.flatMap(num => [num, num * 2]);
console.log("flatMap():", flatMapArray);

// 14. forEach()
array.forEach(num => console.log("forEach():", num));

// 15. includes()
const includesThree = array.includes(3);
console.log("includes():", includesThree);

// 16. indexOf()
const indexOfThree = array.indexOf(3);
console.log("indexOf():", indexOfThree);

// 17. join()
const joinedString = array.join(" - ");
console.log("join():", joinedString);

// 18. keys()
const keys = array.keys();
for (const key of keys) {
    console.log("keys():", key);
}

// 19. lastIndexOf()
const lastIndexOfTwo = array.concat(2).lastIndexOf(2);
console.log("lastIndexOf():", lastIndexOfTwo);

// 20. map()
const mappedArray = array.map(num => num * 2);
console.log("map():", mappedArray);

// 21. pop()
const popArray = array.slice();
popArray.pop();
console.log("pop():", popArray);

// 22. push()
const pushArray = array.slice();
pushArray.push(6);
console.log("push():", pushArray);

// 23. reduce()
const reducedValue = array.reduce((acc, curr) => acc + curr, 0);
console.log("reduce():", reducedValue);

// 24. reduceRight()
const reduceRightValue = array.reduceRight((acc, curr) => acc + curr, 0);
console.log("reduceRight():", reduceRightValue);

// 25. reverse()
const reversedArray = array.slice().reverse();
console.log("reverse():", reversedArray);

// 26. shift()
const shiftArray = array.slice();
shiftArray.shift();
console.log("shift():", shiftArray);

// 27. slice()
const slicedArray = array.slice(1, 3);
console.log("slice():", slicedArray);

// 28. some()
const someAboveFour = array.some(num => num > 4);
console.log("some():", someAboveFour);

// 29. sort()
const sortedArray = array.slice().sort((a, b) => b - a);
console.log("sort():", sortedArray);

// 30. splice()
const spliceArray = array.slice();
spliceArray.splice(1, 2);
console.log("splice():", spliceArray);

// 31. toLocaleString()
console.log("toLocaleString():", array.toLocaleString());

// 32. toString()
console.log("toString():", array.toString());

// 33. unshift()
const unshiftArray = array.slice();
unshiftArray.unshift(0);
console.log("unshift():", unshiftArray);

// 34. values()
const values = array.values();
for (const value of values) {
    console.log("values():", value);
}
