//Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad de vueltas)

let vueltas=Number(prompt("Ingrese la cantidad de vueltas que va dar"));
let tiempoVuelta = 0;
let tiempoTotal = 0;
let tiempoPorVuelta = "";


for(i=1; i<=vueltas; i++){
    tiempoVuelta = Number(prompt(`Ingrese la cantidad de segundos que demoro en dar la vuelta ${i}`));
    tiempoTotal+=tiempoVuelta;
    tiempoPorVuelta+= ` \n Vuelta ${[i]}: ` + tiempoVuelta + ' segundos';
}
alert(`Ud ha corrido un total de ${vueltas} vueltas. \n Los tiempos de cada vuelta son: \n 
${tiempoPorVuelta} \n El promedio del tiempo de las vueltas es ${Math.round(tiempoTotal/vueltas)} segundos
`)