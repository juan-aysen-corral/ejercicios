//let numero = prompt("ingrese un numero")
// for (let i = 1; i <= 10; i++) {
  //  console.log (`${numero } * ${i}  = ${numero * i }`  );
   //}

 /*let numero=null
let numeroingresado=null

 do{
    numeroingresado=Number(prompt("ingrese un numero"))
    numero= numero + numeroingresado
 } while( numeroingresado !=0)
    console.log(numero)
 

let numeroingresado2 = Number(prompt("ingrese el numero secreto"))
let i = 1

 do{
    if( numeroingresado2>numero){
        numeroingresado2=Number(prompt("numero ingresado  es mayor intente nuevamente "))
        
     i++
    
    }
    else if(numeroingresado2<numero) {
        numeroingresado2=Number(prompt("numero ingresado es menor al secreto intente nuevamente"))
        
         i++
    }
 
 }
 while(numeroingresado2 != numero )
 alert(`felicitaciones adivino el numero en ${i} intentos`)*/


 /*let numero= [1,2,6,4,5,6,48,55,9,10]

 for (let i = 0; i < numero.length; i++) {
    const cuales = numero[i];
    console.log(cuales)
    
 }
for(const doble of numero){
    console.log (`${doble*2}`)
}

let familia=[{
    nombre : "jorge",
    edad : 25,
    nacionalidad : "argentina",
    altura: 1.67,
},
{
    nombre : "juan",
    edad : 52,
    nacionalidad : "argentina",
    altura: 1.75,
},
{
    nombre : "leticia",
    edad : 50,
    nacionalidad : "argentina",
    altura: 1.57,
},
{
    nombre : "hernan",
    edad : 15,
    nacionalidad : "argentina",
    altura: 1.70,
},
{
    nombre: "aysen",
    edad : 25,
    nacionalidad : "argentina",
    altura: 1.67,
}
]
for (const familiar of familia) {
    console.log(`hola soy ${familiar.nombre} tengo ${familiar.edad} mi nacionalidad es ${familiar.nacionalidad} mi altura es ${familiar.altura}`)
    
}*/

/*let numeros=[11,88,9,55,54,63,74,82,91,10]
for (let i = 1; i < numeros.length; i++) {
    const element = numeros[i];
    
    if((element % 2) ===0){
    console.log(`${element}`)

}
    
}*/


/*let impares=[]
let pares=[]
let  numero = null
let lista = [ ]
do{
  numero=Number(prompt("ingrese numero"))
  lista.push(numero);
}
while(numero !=0)
console.log(`${lista}`)

  
for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if((element % 2) === 0 && element!=0){
        pares.push(element)
        

        } else if ((element % 2) != 0 && element!=0) {
            impares.push(element)
        }

    }
    
console.log(`pares ${pares} `)

console.log( `impares ${impares} `)




let lista=[1,5,3,44,55,2,99,75,4,12]
let mayor = lista[0]
for(let i=1 ; i< lista.length; i++ ){
    if(lista[i]>mayor){
        mayor=lista[i]
    }

}


console.log(`el numero mayor es ${mayor}`)
