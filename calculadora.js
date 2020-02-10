//Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y hacer dicha operación con ella. Si se ingresa una opción incorrecta debe mostrar un mensaje de error.
const operacion = prompt("Ingrese la operacion a realizar: suma, resta, multiplicacion o division");

const numero1 = Number(prompt("Ingrese el primer numero"));
const numero2 = Number(prompt("Ingrese el segundo numero"));


switch(operacion){
    case "suma":
        resultado = numero1+numero2;
        alert(`La ${operacion} entre ${numero1} y ${numero2} es igual a ${resultado}`);
        break;
    case "resta":
        resultado = numero1-numero2;
        alert(`La ${operacion} entre ${numero1} y ${numero2} es igual a ${resultado}`);
        break;
    case "multiplicacion":
        resultado = numero1*numero2;
        alert(`La ${operacion} entre ${numero1} y ${numero2} es igual a ${resultado}`);
        break;
    case "division":
        resultado = numero1/numero2;
        alert(`La ${operacion} entre ${numero1} y ${numero2} es igual a ${resultado}`);
        break;
    default:
        alert("No hay ingresado una operacion valida, o los caracteres ingresados no se corresponden con un numero");

}