//Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente

const mesElegido = Number(prompt("Ingrese un numero del 1 al 12"));

switch(mesElegido){
    case 1:
        alert("Corresponde al mes de enero");
        break;
    case 2: 
        alert("Corresponde al mes de febrero");
        break;
    case 3:
        alert("Corresponde al mes de marzo");
        break;
    case 4:
        alert("Corresponde al mes de abril");
        break;
    case 5:
        alert("Corresponde al mes de mayo");
        break;
    case 6:
        alert("Corresponde al mes de junio");
        break;
    case 7:
        alert("Corresponde al mes de julio");
        break;
    case 8:
        alert("Corresponde al mes de agosto");
        break;
    case 9:
        alert("Corresponde al mes de septiembre");
        break;
    case 10:
        alert("Corresponde al mes de octubre");
        break;
    case 11:
        alert("Corresponde al mes de noviembre");
        break;
    case 12:
        alert("Corresponde al mes de diciembre");
        break;
    default:
        alert("No ha ingresado un valor valido");
}