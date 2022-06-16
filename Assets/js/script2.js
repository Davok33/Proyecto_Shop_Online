import basedeDatos from "./bdatos.js";

const bdatos = JSON.parse(basedeDatos);

var url = new URL(window.location);
var params2 = new URLSearchParams(url.search);
let ropaParams2 = params2.get("genero2")

function filtrado2(genero2){
    let filtbd2 = bdatos.filter2(ropa => ropa.genero2.includes(genero2))
    return filtbd2;

}
let filtraninos = filtrado2(ropaParams2);
console.log(filtraninos);

function ropahmn (articulo, imagen,){      //
    let ropa1 = '<div class="ropa">';
    ropa1 +=`<img src='${imagen}'><br>`;
   /*  ropa1 += `<span> Género: ${genero} </span><br>`;  */
    ropa1 += `<span> Articulo: ${articulo} </span><br>`; 
    ropa1 += '</div>';
    return ropa1;
}
let ropa_hmn = "";

for (let i = 0; i < filtraninos.length; i++){ 
    let imagen1 = filtraninos[i].imagen; 
    /* let genero1 = filtradd [i].genero; */
    let articulo1 = filtraninos[i].articulo;
    ropa_hmn += ropahmn (articulo1, imagen1)
}
document.querySelector('.cajaimg').innerHTML = ropa_hmn
