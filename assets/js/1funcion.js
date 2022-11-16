
//funcion declarada

function example(a, b, c){
    return a + b + c;    
}

document.getElementById("functionDeclaracion").innerHTML = example (2, 4, 6);

//const resultado = example(2, 4, 6);
//console.log(resultado);
    

//funcion de expresion

const suma = function (a, b, c) {
    return a + b + c;
}

document.getElementById("functionExpression").innerHTML = suma (5, 10, 15);

