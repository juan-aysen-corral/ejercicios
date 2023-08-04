/*let numero1= Number(prompt("ingrese 1 numero"))
let numero2= Number(prompt("ingrese otro numero"))

if(numero1>numero2){
    alert(`el primer numero es mayor que el segundo`
    )
}else{
    alert("el segundo numero emayor ")
}*/

/*let numero3= Number(prompt("ingrese un numero"))
let numero4= Number(prompt("ingrese otro numero"))

if(numero3 === numero4 ){
    console.log("son iguales")
}else{
    console.log("son diferentes")
}*/

/*let numero5= Number(prompt("ingrese un numero"))
let numero6= Number(prompt("ingrese otro numero"))

if(numero5>numero6){
    console.log(`${numero5} es el mas grande`)
}else if(numero5<numero6){
    console.log(`${numero6} es el mas grande`)
}else{
    console.log(`son iguales`)
}*/
/*let numero7=Number(prompt("ingrese un numero"))
let numero8=Number(prompt("ingrese otro numero"))
let numero9=Number(prompt("ingrese otro numero"))

if(numero7<numero8 && numero7<numero9){
    console.log(`el menor es ${numero7}`)
    
}else if(numero8<numero7 && numero8<numero9){
    console.log(`el menor es ${numero8}`)

}else if (numero9<numero8 && numero9<numero7){
    console.log(`el menor es ${numero9}`)
}*/


/*let el={
    nombre : "alejandro",
    edad:25,
    altura:1.80
}
let ella={
    nombre : "maria",
    edad: 8,
    altura: 1.5
}

if (el.edad<ella.edad){
    console.log(`ella es mayor`)
}else{
    console.log(`el es mayor`)
}
if(el.altura<ella.altura){
    console.log(`ella es mas alta`)
}else{
    console.log(`el es mas alto `)
}*/

/*let nombre =prompt("ingrese su nombre ") 
let edad =Number(prompt("ingrese su edad ")) 
let altura =Number(prompt("ingrese su altura "))
let visio =Number(prompt("ingrese su vision ")) 

if(edad > 18 && altura > 150 && visio>=8 && visio<=10){
    console.log(`usted ${nombre} cumple con todos los requisitos  `)
} else {
    console.log(`usted ${nombre} no cumple con los requisitos requeridos `)
}*/

/*let minombre="aysen"
let nombrecliente= prompt("ingrese su nombre")
let pase = prompt("tipo de pase : vip o normal")
let entrada= prompt("posee entrada")
if (nombrecliente === minombre || pase === "vip"){
    console.log("bienvenido")
}else if (entrada === "si"){
    let nose = prompt("desea utilizarla ?")
    if(nose === si){
        console.log("bienvenido")
    
    }

    
}else{
    let comprar = prompt("desea comprar?: afirmatico , negativo")
    if(comprar === "negativo" ){
        console.log("adios")
    }
    else if (comprar === "afirmativo"){
        let dinero = prompt("dinero siponible")
        if(dinero > 1000) {
            console.log("venta exitosa")

        } else{
            console.log("venta rechazada")
        }
    }
}*/

/*let numeroincognita = 5;
let numeroingresado = Number(prompt("adivine un numero"))
let intentos = 1;
while (numeroingresado != numeroincognita && intentos<3 ) {
    if( numeroingresado<numeroincognita){
        numeroingresado= Number(prompt( "numero ingresado menor" ))
    intentos++
    }else{
        numeroingresado= Number(prompt("numro ingresado es mayor"))
        intentos++
    }

    }
if(numeroingresado === numeroincognita){
    alert( "felicidades gano")
}    else {
    alert("sin mas intentos ")
}*/

/*let edad = Number(prompt("ingrese su edad "))
 if(edad<=12){
    console.log("usted es un infante")
 }else if( edad >= 13 && edad<=18){
    console.log("usted es adolescente")
 } else if (edad>=19 && edad<=45){
    console.log( "usted es un mayor joven") 
}else if (edad > 45 && edad<=100 ){
    console.log( "es usted un anciano")
    
}else {
    alert("en realidad tiene esa edad ?")
}*/
 
/*const jugador1= prompt("juego piedra papel o tijeras")
const jugador2= prompt("juego piedra papel o tijeras")

if((jugador1 === "piedra" && jugador2 === "tijeras") || (jugador1 === "papel " && jugador2 === "piedra") ||(jugador1 === "tijeras" && jugador2 === "papel")  ){
    console.log("jugador1 ah ganado ")
}else if ((jugador2 === "piedra" && jugador1 === "tijeras") || (jugador2 === "papel " && jugador1 === "piedra") ||(jugador2 === "tijeras" && jugador1 === "papel")  ){
    console.log("jugador2 ah ganado")
}else if ( jugador1 === jugador2){
    console.log("han empatado ") 
}else if (jugador1 != "tijeras" || jugador1 != "piedra" || jugador1 != "papel"){
    console.log("jugador1 ha hecho trampa  ")
}else if (jugador2 != "tijeras" || jugador2 != "piedra" || jugador2 != "piedra"){
    console.log("jugador2 ha hecho trampa  ")
  }*/

/*let color = prompt("elija un color ")

switch (color) {
    case "blanco":
            console.log("falta de color")
        break;
        case "negro":
             console.log("falta de color")
        break;
        case "verde":
            console.log("el color de la naturaleza")
        break;
        case "azul":
             console.log("el color del agua ")
         break;
         case "amarillo":
            console.log("el color del sol ")
        break;
        case "rojo":
            console.log("el color del fuego ")
        break;
        case "marron":
            console.log("el color de la tierra ")
        break;
        

    default:
        console.log("excelente eleccion, no lo teniamos pensado")
        break;
}*/


/*let numero1= Number(prompt("ingrese un numero "))
let operacion= prompt("ingrese operaciona realizar ")
let numero2=Number(prompt("ingrese otro numero "))




function operaciones ( n, o , m){
    let total=null
    if (o == "+"){
        total= n + m

    }else if( o == "-"){
        total= n - m
    }else if ( o == "*"){
        total=n*m
    } else if(o == "/"){
        if( m == 0){
            total= console.log( " no se realizo la operacion")
        }else{
            total=n/m
        }
    }
    return total;
}
const resto = operaciones(numero1,operacion,numero2)
console.log(`el resultado es ${resto}`)
*/


let nombre=prompt("ingrese su nombre")
let fecha=prompt("ingrese su fecha de nacimiento")
let numerodni=prompt("ingrese su numero de dni")
let nacionalidad=prompt("ingrese su nacionalidad")

const info={
    nombre : nombre,
    nacimiento: fecha,
    dni: numerodni,
    origen: nacionalidad
}
if ( info.dni == null || info.nacimiento == null || info.nombre==null || info.origen== null){
    console.log(`intente nuevamente dentro de un mes `)
}else {
    console.log(info)
}