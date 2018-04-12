
function getDiaSemana(dia)
{
    let resultado;
    if (dia== undefined){
        resultado= 'Error : Variable undefined';        
    }
    else if(typeof(dia) != 'number'){
        resultado = 'Error : No es un número';
    }
    else if(Number.isInteger(dia)){
        if(dia>0 && dia<8){
            let lista = { 1 : 'Lunes', 2:'Martes', 3 : 'Miercoles', 4 : 'Jueves', 5: 'Viernes', 6 : 'Sábado' , 7 : 'Domingo'};
            resultado = 'el numero '+dia+' corresponde al dia '+lista[dia]+' de la semana';
        }
        else{
            resultado = 'el número no esta en el rango requerido (del 1 al 7)'
        }
        }
    else{
        resultado = 'Error : el número no es entero';
    }
    return resultado;
}

console.log(getDiaSemana(3.5))
console.log(getDiaSemana(4))
console.log(getDiaSemana("clock"))
let asd;
console.log(getDiaSemana(asd))
asd = ['pato','gato','perro'];
console.log(getDiaSemana(asd))
console.log(getDiaSemana(9))