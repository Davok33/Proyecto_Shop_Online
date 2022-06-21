
import basedeDatos from "./bdatos.js";

const bdatos = JSON.parse(basedeDatos);

var url = new URL(window.location);
var params = new URLSearchParams(url.search);
let ropaParams = params.get("genero")

function filtro(genero){
    let filtbd = bdatos.filter(ropa => ropa.genero.includes(genero))
    return filtbd;

}
let filtramujer = filtro(ropaParams);
console.log(filtramujer);

function ropahmn (articulo, imagen, talla){      
    let ropa1 = '<div class="ropa">';
    ropa1 +=`<img src='${imagen}'><br>`;
    ropa1 += `<span> Talla: ${talla} </span><br>`;
    ropa1 += `<span> Articulo: ${articulo} </span><br>`; 
    ropa1 += '</div>';
    return ropa1;
}
let ropa_hmn = "";

for (let i = 0; i < filtramujer.length; i++){ 
    let imagen1 = filtramujer[i].imagen; 
    let talla1 = filtramujer [i].talla; 
    let articulo1 = filtramujer[i].articulo;
    ropa_hmn += ropahmn (articulo1, imagen1, talla1)
}
document.querySelector('.cajaimg').innerHTML = ropa_hmn


