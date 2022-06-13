import basedeDatos from "./bdatos.js";

const bdatos = JSON.parse(basedeDatos);
function ropahmn (articulo, imagen){
    let ropa1= '<div class="ropa">';
    ropa1 +=`<img src='${imagen}'><br>`;
    ropa1 += `<span> Articulo: ${articulo} </span><br>`; 
    ropa1 += '</div>';
    return ropa1;
}
let ropa_hmn = "";

for (let i=0; i<10; i++){ 
    let imagen = bdatos[i].imagen;
    let articulo = bdatos[i].articulo;
    ropa_hmn += ropahmn(imagen,  articulo)
}
document.querySelector('.cajaimg').innerHTML = ropa_hmn
console.log(ropa_hmn);