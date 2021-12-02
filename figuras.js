// Codigo del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}




// Codigo del triangulo


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}



function areaTriangulo(altura, base) {
    return altura * base / 2;
}



// Codigo del circulo

const PI = Math.PI;

function diametroCirculo(radio) {
    return 2 * radio;
perimetro}

function perimetroCirculo(radio) {
    return 2 * PI * radio;
}

function areaCirculo(radio) {
    return radio * PI * radio;
}


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
