 function bienvenida (user){
alert("Bienvenido " + user)
 }
 let nombre = prompt("cual es tu nombre?")
 bienvenida (nombre)





class Galeria {
    constructor (id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    reducirStock ()
    {this.stock  = this.stock -1;
    console.log("Se ha actualizado el Stock de " + (this.nombre))
}
}

const foto0 = new Galeria (0, "guachin_terraza", 100, 1);
const foto1 = new Galeria (1, "negro_terraza", 110, 2);
const foto2 = new Galeria (2, "guachin_cazando", 200, 3);
const foto3 = new Galeria (3, "negro_cazando", 210, 4);
const foto4 = new Galeria (4, "guachin_jugando", 300, 5);
const foto5 = new Galeria (5, "negro_jugando", 310, 6);
const foto6 = new Galeria (6, "guachin_durmiendo", 400, 7);
const foto7 = new Galeria (7, "negro_durmiendo", 410, 8);

const fotos = [foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7];

const carrito = []

let opcionesFotos =  "Que foto quieres llevar? "

function sumarCarrito (){
   for (item of fotos) {
    opcionesFotos += `\n ${item.id}  - ${item.nombre} por solo ${item.precio} ` 
   }

   opcionesFotos += `\n Ingrese El numero de la foto que desea comprar. Para ir a pagar ingrese 100`
   
   let respuesta = parseInt (prompt(opcionesFotos))


  while (isNaN(respuesta)){
  alert ("Ingresar sólo números, por favor")
  respuesta = parseInt (prompt(opcionesFotos))
}
 while(respuesta !=100) {
    switch(respuesta){
        case 0: carrito.push (fotos[0])
        alert(`${fotos[0].nombre} se agregó al carrito`)
        fotos[0].reducirStock()
        break;

        case 1: carrito.push (fotos[1])
        alert(`${fotos[1].nombre} se agregó al carrito`)
        fotos[1].reducirStock()
        break;

        case 2: carrito.push (fotos[2])
        alert(`${fotos[2].nombre} se agregó al carrito`)
        fotos[2].reducirStock()
        break;

        case 3: carrito.push (fotos[3])
        alert(`${fotos[3].nombre} se agregó al carrito`)
        fotos[3].reducirStock()
        break;

        case 4: carrito.push (fotos[4])
        alert(`${fotos[4].nombre} se agregó al carrito`)
        fotos[4].reducirStock()
        break;

        case 5: carrito.push (fotos[5])
        alert(`${fotos[5].nombre} se agregó al carrito`)
        fotos[5].reducirStock()
        break;

        case 6: carrito.push (fotos[6])
        alert(`${fotos[6].nombre} se agregó al carrito`)
        fotos[6].reducirStock()
        break;

        case 7: carrito.push (fotos[7])
        alert(`${fotos[7].nombre} se agregó al carrito`)
        fotos[7].reducirStock()
        break;

        default:
            alert("el valor ingresado no es valido")
            break
        
    }
    respuesta = parseInt (prompt(opcionesFotos))
 }
 alert("Ya tenemos tu orden!")
 mostrarCarrito()
  
}






let fotosCarrito = "estas llevando: "
let totalCarrito = 0
sumarCarrito()



function mostrarCarrito (){
    for(itemsEscogidos of carrito){
        fotosCarrito +=`\n  ${itemsEscogidos.nombre}`
        totalCarrito += itemsEscogidos.precio
    }
    alert (`Vas a llevar: \n ${fotosCarrito} \n por un total de ${totalCarrito}`)
}