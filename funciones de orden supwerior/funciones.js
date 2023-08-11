
  
 /*  console.log(beers.sort((a,b)=> -a.abv + b.abv))
    const sliceado = beers.slice(0,10)
     for (const grado of sliceado) {

        console.log("las diez beers con mas graduacion" +" "+ grado.name)
     }
    
    console.log(beers.sort((a,b)=> -a.ibu + b.ibu))
    const sliceado = beers.slice(0,10)
    for (const amargas of sliceado) {
        console.log( "las birras mas amargas"+" "+ amargas.name)
    } 


const filtro = beers.filter(elemento=> elemento.abv <= 10 )

    
     const filtroobjeto = filtro.map(elemento => {
        return {
            "nombre": elemento.name,
            "abv" : elemento.abv,
            "ibu": elemento.ibu
        }
     })
     console.log(filtro)
     console.log(filtroobjeto)*/

    /*const ordered = (arr, prop, bool) => {
        prop = prop;
        console.log(arr[0])
        const diexes = arr.sort((a,b)=> -a.prop + b.prop)
        return diexes;

     }
     console.log(ordered(beers,"ibu", false))


function arrayNombreValor(arraycev, propiedad,valor){
    let arraycorto = arraycev.slice(0,10)
    if( valor === true){
        arraycorto.sort((a,b)=>a[propiedad] -b[propiedad] )

    }else {
        arraycorto.sort((a,b)=> b[propiedad]-a[propiedad])
    }
    return arraycorto
}
console.log(arrayNombreValor(beers,"abv",false))*/


// 5.

let tableta = document.getElementById("tbody")
 function tabla(array,id){
    let solo= array.map(cerbeza=>{
    
        return{
                "nombre" : cerbeza.name,
                "abv" : cerbeza.abv,
               "ibu" : cerbeza.ibu
        };
    })
    for (const birra of solo) {
        id.innerHTML = id.innerHTML + `
            <tr> 
            <td>
                ${birra.nombre} 
            </td>
            <td>
                ${birra.abv} 
            </td>
            <td>
                ${birra.ibu} 
            </td>

            </tr>
        `
        
    }
 
 } 
tabla(beers, tableta);

 