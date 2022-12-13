let operandoa;
let operandob;
let operacion;

function init (){
    let cero = document.getElementById("cero");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let clear = document.getElementById("clear");
    let igual = document.getElementById("igual");
    let division = document.getElementById("division");
    let multiplicacion = document.getElementById("multiplicacion");
    let resta = document.getElementById("resta");
    let suma = document.getElementById("suma");
    let resultado = document.getElementById("resultado");

    cero.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "0";
    })
    uno.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "1";
    })
    dos.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "2";
    })
    tres.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "3";
    })
    cuatro.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "4";
    })
    cinco.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "5";
    })
    seis.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "6";
    })
    siete.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "7";
    })
    ocho.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "8";
    })
    nueve.addEventListener("click", (evt)=>{
        resultado.textContent = resultado.textContent + "9";
    })
    clear.addEventListener("click", (evt)=>{
        resetear()
    })
    suma.addEventListener("click", (evt)=>{
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    })
    resta.addEventListener("click", (evt)=>{
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    })
    multiplicacion.addEventListener("click", (evt)=>{
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    })
    division.addEventListener("click", (evt)=>{
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    })
    igual.addEventListener("click", (evt)=>{
        operandob = resultado.textContent;
        resolver();
    })

}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;    
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break; 
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;   
    }
    resetear();
    resultado.textContent = res;
}

document.addEventListener("DOMContentLoaded", ()=>{
    init()
})
