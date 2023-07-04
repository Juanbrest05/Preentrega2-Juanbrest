const products = [
    {
        id: "1",
        name: "Campera Windrunner Negra",
        price: 18000,
        category: "Campera",
        img: "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-rompeviento-con-capucha-nike-windrunner-negra-510020ar2191010-1.jpg",
        stock: 10,
        description: "La campera Windrunner Negra es una prenda deportiva de estilo elegante y funcional. Confeccionada en color negro clásico, presenta un diseño ligero, resistente al viento y con detalles icónicos. Perfecta para brindar protección y estilo en cualquier ocasión."

    },
    {id: "2",
    name: "Remera Jordan",
    price: 11000,
    category: "Remera",
    img: "https://www.digitalsport.com.ar/files/products/60945049ab97f-522479-1200x1200.jpg",
    stock: 8,
    description: "Fabricada con materiales de alta calidad, la remera Jordan ofrece una comodidad excepcional y una gran durabilidad. Puede encontrarse en una amplia variedad de colores y estilos, desde los clásicos tonos negro y rojo hasta combinaciones más atrevidas y llamativas."
    },
    {id: "3",
    name: "Nike Jordan retro 4",
    price: 21000,
    category: "zapatilla",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5623dddf/products/NIDH6927-140/NIDH6927-140-1.JPG",
    stock: 10,
    description: "Las Nike Jordan Retro 4 son zapatillas legendarias que rinden homenaje a la icónica era del baloncesto. Con su diseño distintivo, incluyendo el logotipo del Jumpman y detalles de alta calidad, estas zapatillas ofrecen estilo y rendimiento excepcionales para los verdaderos fanáticos del calzado deportivo.",
    },
    {id: "4",
    name: "Nike Jordan retro 1",
    price: 24000,
    category: "zapatilla",
    img: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89c121fc-3d07-4de0-aef6-bcc9c2764a2c/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg",
    stock: 9,
    description: "Las Nike Jordan Retro 1 son zapatillas icónicas que marcaron el inicio de una leyenda. Con su diseño clásico de baloncesto, combinación de colores llamativos y el logotipo del Jumpman, estas zapatillas ofrecen un estilo atemporal y un legado inigualable en la cultura del calzado deportivo.",
    },
    

]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByid = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export default products;