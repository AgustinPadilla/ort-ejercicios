document.querySelector("#btnCalcularEj15").addEventListener("click", calcular);
function calcular(){
    let codigo = document.querySelector("#txtCodigoEj15").value;
    let departamento;
    switch (codigo){
        case "A":
            departamento = "Canelones";
            break;
        
        case "B":
            departamento = "Maldonado";
            break;
        
        case "C":
            departamento = "Rocha";
            break;
        
        case "D":
            departamento = "Treinta y Tres";
            break;
        
        case "E":
            departamento = "Cerro Largo";
            break;
        
        case "F":
            departamento = "Rivera";
            break;
        
        case "G":
            departamento = "Artigas";
            break;
        
        case "H":
            departamento = "Salto";
            break;
        
        case "I":
            departamento = "Paysandú";
            break;
        
        case "J":
            departamento = "Rio Negro";
            break;
        
        case "K":
            departamento = "Soriano";
            break;
        
        case "L":
            departamento = "Colonia";
            break;
        
        case "M":
            departamento = "San José";
            break;
        
        case "N":
            departamento = "Flores";
            break;
        
        case "O":
            departamento = "Florida";
            break;
        
        case "P":
            departamento = "Lavalleja";
            break;
        
        case "Q":
            departamento = "Durazno";
            break;
        
        case "R":
            departamento = "Tacuarembó";
            break;
        
        case "S":
            departamento = "Montevideo";
            break;
        default:
            departamento = "Codigo erroneo"
    }
    document.querySelector("#pResultadoEj15").innerHTML = departamento;
}