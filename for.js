// for (i=0; i<10; i++){
//     console.log(i);
// }


const cantidadDeGustos=Number(prompt("Cuantos gustos de helado desea?"));

let gustos = "";

for(i = 0; i<cantidadDeGustos; i++){
    gusto = prompt(`Que gusto desea?, le quedan ${cantidadDeGustos-i}gustos`);
    gustos += gusto + "\n";
}

alert(gustos);