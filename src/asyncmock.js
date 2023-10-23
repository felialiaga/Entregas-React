
const misProductos = [
    {id: "1", nombre: "Iphone 14", precio:  450000, img: "../public/img/iphone1.png", idCategoria: "2" },
    {id: "2", nombre: "Iphone 14", precio:  450000, img: "../public/img/iphone2.png", idCategoria: "2" },
    {id: "3", nombre: "Iphone 14", precio:  450000, img: "../public/img/iphone3.png", idCategoria: "2" },
    {id: "4", nombre: "Apple Watch", precio:  450000, img: "../public/img/reloj.png", idCategoria: "3" },
    {id: "5", nombre: "Apple Watch", precio:  450000, img: "../public/img/reloj2.png", idCategoria: "3" },
    {id: "6", nombre: "Airpods Pro", precio:  450000, img: "../public/img/airpods.png", idCategoria: "4" },
    {id: "7", nombre: "Airpods Pro 2", precio:  450000, img: "../public/img/airpods2.png", idCategoria: "4" },
    {id: "8", nombre: "Headphones Pro", precio:  450000, img: "../public/img/auriculares.png", idCategoria: "4" },
    {id: "9", nombre: "Apple TV", precio:  450000, img: "../public/img/appleTv.png", idCategoria: "5" },
    {id: "10", nombre: "Smart TV", precio:  450000, img: "../public/img/tv.png", idCategoria: "5" },
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 1000)
    })
}

export const getAProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500);
    })
}

//funcion que retorne toda una categoria

export const getProductosPorCategoria = (idCat) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter((item) => item.idCategoria === idCat)
            resolve(productosCategoria);
        }, 500);
    })
}