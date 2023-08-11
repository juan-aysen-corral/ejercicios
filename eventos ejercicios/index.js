/*● 1° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno
del cuadrado deberá cambiar a celeste.*/


let botoncito = document.getElementById("boton")
let color = document.getElementById("color")
let texto =document.getElementById("texto")

botoncito.addEventListener("click", (e)=>{
    e.preventDefault()
   
   let bg = color.style.backgroundColor
   
   switch (bg) {
    case "gray":
    color.style.backgroundColor = "blue"
    texto.innerHTML="azul"
    break;
   case "blue":
    color.style.backgroundColor = "red"
    texto.innerHTML="rojo"
    
    break
    case "red":
        color.style.backgroundColor="gray"
        texto.innerHTML="gris"
        break;
        default:
            break;
   }
    
})


/*● 2° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un input de texto, al escribir en el input de texto, los que se esté escribiendo
deberá aparecer impreso dentro del cuadrado.
Extras:
● Crea un botón para borrar el contenido del cuadrado*/


let input = document.getElementById("nombre")
let mensaje  = document.getElementById("texto2")
let boton2 = document.getElementById("boton2");

const change = function (){
    console.log(input.value)
    mensaje.innerHTML =  input.value

}
input.addEventListener("keyup", change)


boton2.addEventListener("click", (e) => {
    mensaje.innerHTML = "";
    input.value = "";
})


let boton3 = document.getElementById("boton3");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");

boton3.addEventListener("click", (e)=> {
    e.preventDefault();
    let pe = peso.value;
    let al = altura.value/100;
    let resul = pe / (al*al);
    resultado.innerHTML = resul;
}

)

let dolar = document.getElementById("dolar");
let pesoA = document.getElementById("pesoA");
console.log(pesoA)


const handleValor = function(e){
    console.log(e.target.value)
    if(e.target.id ="pesoA" ){
        dolar.value = pesoA.value / 500;
    }else if(e.target.id = "dolar" ) {
        dolar.value = null
        pesoA.value = dolar * 500;

    }
 
   
}
pesoA.addEventListener("keyup",(e)=> handleValor(e))
dolar.addEventListener("keyup",(e)=> handleValor(e))
