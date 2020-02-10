//Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina

const estacionDelAnio = prompt("Ingrese una estacion del anio");

switch(estacionDelAnio){
    case "verano":
        alert("El verano comienza el 21 de diciembre y finaliza el 20 de marzo");
        break;
    case "otonio": 
        alert("El otonio comienza el 21 de marzo y finaliza el 20 de junio");
        break;
    case "invierno":
        alert("El invierno comienza el 21 de junio y finaliza el 20 de septiembre");
        break;
    case "primavera":
        alert("La primavera comienza el 21 de septiembre y finaliza el 20 de diciembre");
        break;
    default:
        alert("El valor ingresado no se corresponde con una estacion del anio o lo ha escrito con mayuscula");
}