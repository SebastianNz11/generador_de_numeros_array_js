const arreglo = [];

function generador() {
  for (let i = 0; i <= 9999; i++) {
    let numero1 = getRndInteger(-10000, 10000);
    arreglo.push(numero1);
  };
  arreglo.sort(function(a, b){return a - b});
}

//funcion numeros aleatorios con limites min y max
function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

//llamada a función generadora
generador();
console.log(arreglo);

// creación de archivo JSON
const fs = require('fs');
const escribir = JSON.stringify(arreglo);

fs.writeFile('doc.txt', escribir, (error) => {
    if (error) throw error; 
        console.log("Datos escritos exitosamente!")    
});