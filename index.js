class Imagenes {
    constructor (id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    reducirStock ()
    {this.stock  - this.stock -1;
    console.log("Se ha actualizado el Stock de " + (this.nombre))
}
}

const foto0 = new Foto (0, "guachin_terraza", 100, 1)
const foto1 = new Foto (0, "negro_terraza", 110, 2)
const foto2 = new Foto (0, "guachin_cazando", 200, 3)
const foto3 = new Foto (0, "negro_cazando", 210, 4)
const foto4 = new Foto (0, "guachin_jugando", 300, 5)
const foto5 = new Foto (0, "negro_jugando", 310, 6)
const foto6 = new Foto (0, "guachin_durmiendo", 400, 7)
const foto7 = new Foto (0, "negro_durmiendo", 410, 8)

const fotos = [foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7];

const carrito = []

let opcionesFotos =  "Que foto quieres llevar? "

function sumarCarrito (){
   for (item of fotos) {
    opcionesFotos += `\n ${item.id} ${item.nombre} "solo por " ${item.precio} ` 
   }
   let respuesta = prompt(opcionesFotos)
}

sumarCarrito()