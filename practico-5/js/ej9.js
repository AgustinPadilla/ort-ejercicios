document.querySelector('#btnEj9').addEventListener('click', mostrar);

function mostrar() {
    let matricula = document.querySelector('#txtEj9').value;
    document.querySelector('#pResultEj9').innerHTML = departamento(matricula)

}


function departamento(matricula) { 
    let letra = matricula.charAt(0).toUpperCase()
    let result = "";
    switch (letra) {
        case "A":
            result = "Canelones"       
            break;
        case "B":
            result = "Maldonado"       
            break;
        case "C":
            result = "Rocha"       
            break;
        case "D":
            result = "Treinta y Tres"       
            break;
        case "E":
            result = "Cerro Largo"       
            break;
        case "F":
            result = "Rivera"       
            break;
        case "G":
            result = "Artigas"       
            break;
        case "H":
            result = "Salto"       
            break;
        case "I":
            result = "Paysandú"       
            break;
        case "J":
            result = "Río Negro"       
            break;
        case "K":
            result = "Soriano"       
            break;
        case "L":
            result = "Colonia"       
            break;
        case "M":
            result = "San José"       
            break;
        case "N":
            result = "Flores"       
            break;
        case "O":
            result = "Florida"       
            break;
        case "P":
            result = "Lavalleja"       
            break;
        case "Q":
            result = "Durazno"       
            break;
        case "R":
            result = "Tacuarembó"       
            break;
        case "S":
            result = "Montevideo"       
            break;
        
        default:
            result = "Matricula no valida"
            break;
    }
    return result
 }