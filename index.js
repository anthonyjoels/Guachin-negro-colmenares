class producto {
    constructor (id, nombre, precio, stock,imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
    reducirStock ()
    {this.stock  = this.stock -1;
    console.log("Se ha actualizado el Stock de " + (this.nombre))
}
}

const producto0 = new producto (0, "guachin terraza", 100, 1, "./imagenes/guachin terraza.jpg");
const producto1 = new producto (1, "negro terraza", 110, 2, "./imagenes/negro terraza.jpg");
const producto2 = new producto (2, "guachin cazando", 200, 3, "./imagenes/guachin cazando.jpg");
const producto3 = new producto (3, "negro cazando", 210, 4,"./imagenes/negro cazando.jpg");
const producto4 = new producto (4, "guachin jugando", 300, 5, "./imagenes/guachin jugando.jpg");
const producto5 = new producto (5, "negro jugando", 310, 6, "./imagenes/negro jugando.jpg");
const producto6 = new producto (6, "guachin durmiendo", 400, 7, "./imagenes/guachin durmiendo.jpg");
const producto7 = new producto (7, "negro durmiendo", 410, 8, "./imagenes/negro durmiendo.jpg");
const producto8 = new producto (8, "guachin y negro juntos", 420, 8, "./imagenes/guachin y negro.jpg");


const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];


const carrito= JSON.parse(localStorage.getItem("carrito")) ||[]


const divProductos = document.getElementById("divProductos")


productos.forEach(producto=>{
    divProductos.innerHTML += `
    <div id="${producto.id}" class="card tarjeta col-sm-12 col-md-6 col-lg-4  " >
   
    <div class = "card-body" >
    <img src="${producto.imagen}" height="70%" class="card-img-top imagenTarjeta" >
    <h4 class="card-title tituloTarjeta">${producto.nombre}</h4>
    
    <p class="card-text precioTarjeta center">$ ${producto.precio}</p>
    
    <div class="d-grid gap-2 col-6 mx-auto">
    <buttom id=${producto.id} class="btn btn-primary botonTarjeta" > AGREGAR</buttom>
    </div>


    
    
    </div>`
})


const botonesAgregar = document.querySelectorAll(".btn-primary")

botonesAgregar.forEach(boton=>{
    boton.onclick = () => {
        const productoSeleccionado = productos.find(prod=> prod.id===parseInt(boton.id))

        const productoCarrito = {...productoSeleccionado,cantidad:1}
        const indexCarrito = carrito.findIndex(prod=>prod.id === productoCarrito.id)
        if(indexCarrito === -1){
            carrito.push(productoCarrito)
        } else {
            carrito[indexCarrito].cantidad +=1
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
})

const botonFinalizar = document.querySelector ("#finalizar")
botonFinalizar.onclick = () => {
    const valores = carrito.map(prod=> prod.precio * prod.cantidad)
    let totalCompra = 0
    valores.forEach(valor=>{
        totalCompra += valor
    })
}