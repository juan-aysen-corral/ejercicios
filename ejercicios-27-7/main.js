let miNombre = "aysen"
let miAPellido = "corral"
let miEdad = 25
let miMascota = "hasani"
let edadMascota = 3


console.log (miNombre)
console.log (miAPellido)
console.log (miEdad)
console.log (miMascota)
console.log (edadMascota)


let nombreCompletp = miNombre+ " "+ miAPellido 
 
let textocompleto = miNombre+ " "+miAPellido+ " "+miEdad+ " "+miMascota+ " "+edadMascota
 
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota

const alumno = {
    altura : 1.68,
    nombre : "juan",
    segundonombre : "aysen",
    apellido : "corral",
    sexo : "masculino"
}

console.table(alumno);
console.table(alumno.altura);
console.table(alumno.nombre);
console.table(alumno.segundonombre);
console.table(alumno.apellido);
console.table(alumno.sexo);

const mascota = {
    nombre :"hasani",
    raza: "terbal",
    pelaje :"abundante",
    color : "negro",
    altura : 0.65
}


console.table(mascota);
console.table(mascota.pelaje);
console.table(mascota.color);
console.table(mascota.raza);
console.table(mascota.nombre);
console.table(mascota.altura);

const frutas = ["banana","mandarina", "guayaba","anana","tomate"]

console.table(frutas);
console.table(frutas[0]);
console.table(frutas[1]);
console.table(frutas[2]);
console.table(frutas[3]);
console.table(frutas[4]);


const soymayordeedad = prompt("ingrese su edad")

console.log( "soy mayor de edad", miEdad >= soymayordeedad )


const numeros = [0,1,2,3,4]
 console.log(numeros)
 console.log(numeros[0])
 console.log(numeros[1])
 console.log(numeros[2])
 console.log(numeros[3])
 console.log(numeros[4])

 const familia =["padre","madre","hermano","tio","abuelo"]
 console.log(familia)
 console.log(familia[0])
 console.log(familia[1])
 console.log(familia[2])
 console.log(familia[3])
 console.log(familia[4])

 console.log(frutas[1],numeros[3],familia[4])

 const edadmia =prompt("ingrese su edad de comparacion")
 const edaddelcompañero=prompt("ingrese la edad de un compañero")

 let edadesiguales = (edadmia==edaddelcompañero)
 let soymayor=(edadmia>edaddelcompañero)
 let soymenor=(edaddelcompañero>miEdad)

 console.log("mi edad es igual a la de mi compañero", edadesiguales)
 console.log("mi edad es mayor que la de mi compañero",soymayor)
 console.log("mi edad es menor que la de mi comañero",soymenor)

 const edadpermitida= prompt("ingrese la edad del infante")
 const alturapermitida= prompt("ingrese la altura del infante en cm")
  const puedesubir=(edadpermitida>=6 && alturapermitida>=120)
  console.log("puede subir a la atraccion", puedesubir)
 
const pase = prompt("ingrese su nivel de pase en mayusculas")
const saldo= prompt("ingrese su saldo disponible")
const puedepasar = (pase=="VIP" || saldo> 1000 )
console.log("la persona puede pasar", puedepasar)
