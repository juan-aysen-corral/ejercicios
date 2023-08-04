function saludar(nombre){
   return (`hola ${nombre}`);
}
const aysen = saludar( "aysen")
console.log(aysen);


function multplicar(a,b){
    return a * b;
}
const resultado = multplicar(10,2)
console.log(resultado);

function areatriangulo(base,altura){
    return (base*altura) / 2;
}



function Perimetrotriangulo(izq,der,inf){
    return izq + der + inf;
}
const perimetro =Perimetrotriangulo(4,5,6)
const area = areatriangulo(5,3);

console.log(`el area del triangulo es ${area} y su perimetro es ${perimetro}`)

function calcularPrecio (p1,cant ){
    let preciototal=p1*cant;
   if( cant >=10){
    preciototal= preciototal - (preciototal/10)

    
}else if(cant>=20){
    preciototal= preciototal - (preciototal/20)
}
 return preciototal;
}

const total = calcularPrecio(10,25) 
console.log(total);

function esMayorDeEdad(num){
    let mensaje= " ";
    num >= 18 ? mensaje = "eres mayor de edad" : "eres menor de edad";
    return mensaje;
}

const edad = esMayorDeEdad(25)
console.log(edad)

function calcularImpuestos(ing){
    let impuesto= null
    if(ing <= 10000 ){
        impuesto= ing/10

    }
    else if(ing<=2000 ){
        impuesto= ing / 15
    }
    else {
        impuesto=ing/20
    }
    return impuesto 
}
const totalapagar = calcularImpuestos(20500)
console.log(totalapagar)

function verificarDia(d){
    let dia = null
    switch (d){
        case 1 :
            dia="es un dia laboral"
            break;
        case 2: 
            dia="es una dia laboral"
        break;
        case 3 :
            dia= "es un dia laboral"
        break;
        case 4: 
            dia="es un dia laboral"
        break;
        case 5 :
            dia= "es un dia laboral"
        break;
        case 6: 
            dia="es un dia no laboral"
        break;
        case 7 :
            dia= "es un dia no laboral"
        break;
        default:
        dia="no es un dia de la semana"
        
    }
    return dia
}

const consulta = verificarDia(3)
console.log(consulta)