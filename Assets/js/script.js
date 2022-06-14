
import basedeDatos from "./bdatos.js";

const bdatos = JSON.parse(basedeDatos);

var url = new URL(window.location);
var params = new URLSearchParams(url.search);
let ropaParams = params.get("genero")

function filtrado(genero){
    let filtbd = bdatos.filter(ropa => ropa.genero.includes(genero))
    return filtbd;

}
let filtradd = filtrado(ropaParams);
console.log(filtradd);

function ropahmn (articulo, imagen,){
    let ropa1= '<div class="ropa">';
    ropa1 +=`<img src='${imagen}'><br>`;
   /*  ropa1 += `<span> Género: ${genero} </span><br>`;  */
    ropa1 += `<span> Articulo: ${articulo} </span><br>`; 
    ropa1 += '</div>';
    return ropa1;
}
let ropa_hmn = "";

for (let i=0; i < filtradd.length; i++){ 
    let imagen1 = filtradd[i].imagen; 
    /* let genero1 = filtradd [i].genero; */
    let articulo1 = filtradd[i].articulo;
    ropa_hmn += ropahmn (articulo1, imagen1)
}
document.querySelector('.cajaimg').innerHTML = ropa_hmn


