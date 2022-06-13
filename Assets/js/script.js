import basedeDatos from "./bdatos";

const bdatos = JSON.parse(basedeDatos);
function ropahmn (articulo, imagen /* talla, categoria, genero, adulto, precios */){
    let ropa1= '<div class="ropa">';
    ropa1 +=`<img src='${imagen}'><br>`;
/*     ropa1 += `<span> Niño/Adulto: ${adulto} </span><br>`;
    ropa1 += `<span> Género: ${genero} </span><br>`;
    ropa1 += `<span> Tallas: ${talla} </span><br>`;
    ropa1 += `<span> Categorias: ${categoria} </span><br>`;
    ropa1 += `<span> Precios: ${precios} </span><br>`;*/
    ropa1 += `<span> Articulo: ${articulo} </span><br>`; 
    ropa1 += `</div>`;
    return ropa1;
}
let ropa_hmn = "";

for (let i=0; i<1; i++){ 
    let imagen1 = bdatos [i].imagen;
     let articulo1= bdatos [i].articulo;
  /*  let talla1 = bdatos [i].talla;
    let categoria1 = bdatos [i].categoria;
    let genero1 = bdatos [i].genero;
    let adulto1 = bdatos [i].adulto;
    let precios1 = bdatos [i].precios; */
    
    ropa_hmn += ropahmn(imagen1,  articulo1/*  talla1, categoria1, genero1, adulto1, precios1 */)
}
document.querySelector('.caja_img').innerHTML = ropa_hmn