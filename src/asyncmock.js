
const misProductos = [
    {id: 1, nombre: "Fideos", precio:  450, img: "../public/img/fideos.jpeg" },
    {id: 2, nombre: "Yerba", precio: 500, img: "../public/img/yerba.jpeg" },
    {id: 3, nombre: "Arroz", precio: 300, img: "../public/img/arroz.jpeg" },
    {id: 4, nombre: "Aceite", precio: 900, img: "../public/img/aceite.png" }
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