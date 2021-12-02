
//Helpers
function esPar(numerito){
    return (numerito % 2 == 0);
}

const salariosColombia = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColombiaSorted = salariosColombia.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numerito){
    return (numerito % 2 == 0);
}

//Calculadora de medianas

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        
        return (personaMitad1 + personaMitad2) / 2
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//media general

const medianaGeneralCol = medianaSalarios(salariosColombiaSorted);

//mediana del top 10

const spliceStart = salariosColombiaSorted.length * 90 / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;

const salariosColTop10 = salariosColombiaSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,

);