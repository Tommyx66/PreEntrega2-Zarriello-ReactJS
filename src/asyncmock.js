
const productos = [
    { nombre: "Guitarra Fender", precio: 1500, id: 1, img: "./img/guitar1.jpg", idCat: "1" },
    { nombre: "Bajo Fender", precio: 1300, id: 2, img: "./img/bass1.jpg", idCat: "2" },
    { nombre: "Sintetizador Roland", precio: 1700, id: 3, img: "./img/sinth1.jpg", idCat: "3" },
]

//Funcion que busca los items.
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Funcion que retorna un solo item.
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Funcion que retorna toda la categoria.

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 2000)
    })
}