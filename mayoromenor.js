//Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

let mayorOMenor = prompt("Desea buscar el mayor o el menor de los numeros?");
let cantidad = Number(prompt("Cuantos numeros desea ingresar?"));
let mayor = 0;
let menor = 999999999999999999999;

if(mayorOMenor === "mayor"){
    for(i=1; i<=cantidad; i++){
        let numeroIngresado=Number(prompt("Ingrese un numero"));
        if(numeroIngresado>mayor){
            mayor=numeroIngresado;
        }

    }
    alert(`El mayor de los numeros ingresados es ${mayor}`);
} else if(mayorOMenor==="menor"){
    for(i=1; i<=cantidad; i++){
        let numeroIngresado=Number(prompt("Ingrese un numero"));
        if(numeroIngresado<menor){
            menor=numeroIngresado
        }
    }
    alert(`El menor de los numeros ingresados es ${menor}`);
} else{
    alert("la operacion o alguno de los valores no son validos");
}