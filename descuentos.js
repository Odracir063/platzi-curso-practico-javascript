
function calcularPrecioDescuento(precio, descuento){

    return (precio * (100 - descuento)) / 100;

}

function calcularDescuento(){
   const precio = document.getElementById("InputPrecio").value;
   const descuento = document.getElementById("InputDescuento").value;

    const precioDescuento = calcularPrecioDescuento(precio, descuento);

   alert(precioDescuento);
}