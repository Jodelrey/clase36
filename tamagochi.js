//Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
// ALIMENTAR: +3 energía, +2 felicidad
// JUGAR: +2 felicidad, -2 energía, -1 limpieza
// DORMIR: +5 energía, +2 salud, -2 limpieza
// VACUNAR: +5 salud, -6 felicidad
// BAÑAR: +3 salud
// RETAR: -3 felicidad
// ACARICIAR: +4 felicidad
// Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
const nombre = prompt("Ingrese el nombre del tamagochi");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let salud = getRndInteger(1, 10);
let felicidad = getRndInteger(1,10);
let limpieza = getRndInteger(1, 10);
let energia = getRndInteger(1, 10);

let saludo = alert(`Hola ${nombre} tus valores son: \n -Salud: ${salud} \n -Felicidad: ${felicidad} \n -Limpieza: ${limpieza} \n -Energia: ${energia}`);

const accion = prompt("Indique que desea hacer: alimentar, jugar, dormir, vacunar, bañar, retar, acariciar");

switch(accion){
    case "alimentar": 
        energia+=3;
        felicidad+=2;
        break;
    case "jugar": 
        felicidad+=2;
        energia-=1;
        limpieza-=1;
        break;
    case "dormir":
        energia+=5;
        salud+=2;
        limpieza-=2;
        break;
    case "vacunar":
        salud+=5;
        felicidad-=6;
        break;
    case "bañar":
        salud+=3;
        break;
    case "retar":
        felicidad-=3;
        break;
    case "acariciar": 
        felicidad+=4;
        break;
    default:
        alert("La accion seleccionada no es correcta");
}

let despedida = `${nombre} tus valores son: \n -Salud: ${salud} \n -Felicidad: ${felicidad} \n -Limpieza: ${limpieza} \n -Energia: ${energia}`;

if(felicidad >10){
    felicidad=10;
} else if (felicidad < 1){
    felicidad = 0;
    despedida +=`\n Esta muy triste`;
}
if(limpieza >10){
    limpieza =10;
} else if(limpieza<1){
    limpieza = 0;
    despedida += `\n Esta sucio`
}
if(salud>10){
    salud=10;
} else if(salud<1){
    salud = 0;
    despedida +=`\n Esta enfermo`;
}
if(energia>10){
    energia=10;
} else if(energia<1){
    energia = 0;
    despedida+=`\n Le hace falta mas energia`;
}

alert(despedida);
