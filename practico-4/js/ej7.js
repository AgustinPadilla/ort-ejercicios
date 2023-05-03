document.querySelector('#btnEj7').addEventListener('click',calcular);

function calcular(){
    far = Number(document.querySelector('#nmb1Ej7').value);
    med = document.querySelector('#selEj7').value
    document.querySelector('#pRetEj7').innerHTML ='La temperatura en '+ med + ' es:'+ ' ' + convertirTemp(far, med);
}

function convertirTemp(far, med) { 
    switch (med) {
        case 'C':
            return (far-32)/1.8
            break;
        case 'K':
            return (far+459.67)/1,8
            break;
        case 'Ra':
            return far+459.67
            break;
        case 'Re':
            return (far-32)/2.25
            break;
    
        default:
            break;
    }
 }