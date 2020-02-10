//Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24

let numero = Number(prompt("Ingrese un numero"));
let factorial = numero;
for(i=1; i<numero; i++){
    factor = (numero -i);
    factorial *= factor;

}

alert(`El factorial de ${numero} es ${factorial}`);