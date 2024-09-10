console.log('08');
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const secondProductName = 'cap';
const secondProductPrice = 35;
const secondPrpductQuantity = 2;

const firstProduct = {};  // object
// Propiedades (properties)
firstProduct.name = 'T-shirt';
firstProduct.price = 40;
firstProduct.quantity = 2;
firstProduct.available = false;
firstProduct.sizes = ['L','M'];

console.log(firstProduct)
console.log(typeof firstProduct)

const secondProduct = {
    name : 'Cap',
    price: secondProductPrice,
    quantity: secondPrpductQuantity,
    available: true,
    sizes: ['S','M','L'],
    'country-store': 'ES'
};

console.log(secondProduct.name);
console.log(secondProduct.sizes);
console.log(secondProduct["country-store"]);
console.log(secondProduct['quantity'])
const key = 'quantity';
console.log(secondProduct[key]);
const getProductAtribute = (product, key) => {
    return product[key];
}
console.log(getProductAtribute(firstProduct, 'price'))


secondProduct.atributes = {
    color: 'red',
    material: 'cotton',
}
console.log(Object.keys(secondProduct));

const products = [
    firstProduct,
    {
    name: 'shoes',
    price: 12,
    },
];
console.log(products);

const shows = [
    {
        id: 1,
        name: 'under the dome',
        genres: ['drama', 'ciencia ficccion', 'thriller']
    },
    {
        id: 2,
        name: 'Game of thrones',
        genres: ['drama','thriller'],
        seasson: {
            title: 'season 1'
        },
    }
];
// Borrar propiedades
delete secondProduct.atributes;
console.log(secondProduct);

let info = ';'
for (let show of shows) {
    
    info = info + `
        show: ${show.name}</h2>
        genres: ${show.genres.join(' | ')}</p>
        `;
};

//mostras por pantalla
document.write(info);

console.log(Object.values(firstProduct));
console.log(Object.entries(firstProduct));

const user = {
    email: 'test@test.com',
    address: {
        street: 'test',
        number: 12
    },
};
//structuredClone
//...
//JSON.parse(JSON.stringfy)

const user2 = structuredClone(user);
//const user2 = {...user};
//const user2 = JSON.parse(JSON.stringify(user))// lo convierte a un string
user2.email = 'test2.test.com';
user2.role = 'admin';
user2.address.street = 'C/ keepcoding';
user2.address.number = 23;

console.log(user);
console.log(user2);

// Ejercicio Recorrer el array de libros y mostrar en consola los títulos de los libros que fueron publicados después del año 2000
const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    year: 1967,
    },
    {
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
];
let selectedBooks =[];
for (let yearOfBooks of books) {
    
    if (yearOfBooks.year >= 2000) {
        selectedBooks.push(yearOfBooks.title)

    };
};

console.log(selectedBooks);

/*for (let book of books) {
    if (book.year > 2000) {  
    console.log(book.title);  
    }
};*/

