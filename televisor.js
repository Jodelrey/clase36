//Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
// CAMBIAR CANAL: permite ingresar un canal (0 al 99)
// CANAL SIGUIENTE: sube un canal
// CANAL ANTERIOR: baja un canal
// SUBIR VOLUMEN: sube en volumen en 5
// BAJAR VOLUMEN: disminuye en volumen en 5
// MUTEAR: pone el volumen en 0
// Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual

const encendido = confirm("Desea encender el televisor?");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let canalActual = getRndInteger(0,99);
let volumenActual = getRndInteger(0,30);
if (encendido){
    
    let accion = prompt(`Ud se encuentra en el canal ${canalActual} y el nivel de volumen es ${volumenActual}. Que desea realizar: cambiar canal, canal siguiente, canal anterior, subir volumen, bajar volumen o mutear?`);
    switch(accion){
        case "cambiar canal": 
        let nuevoCanal= Number(prompt("Ingrese el canal que desea, entre 0 y 99"));
        canalActual=nuevoCanal;
        if(nuevoCanal>99 || nuevoCanal<0){
            alert("No ingreso un canal valido");
        }
        break;
        case "canal siguiente":
            canalActual++;
        break;
        case "canal anterior":
            canalActual--;
            break;
        case "subir volumen":
            volumenActual+=5;
            if(volumenActual>30){
                volumenActual=30;
            }
            break;
        case "bajar volumen":
            volumenActual-=5;
            if(volumenActual<0){
                volumenActual=0;
            }
            break;
        case "mutear":
            volumenActual=0;
        break;
        default:
            alert("La opcion ingresada no es valida");
    }
    alert(`Ud se encuentra en el canal ${canalActual}, el nivel de volumen es ${volumenActual}`);

} else {
    alert("Gracias");
}