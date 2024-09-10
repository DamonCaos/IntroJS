console.log('09');


const twilight = {title: 'Twilight', author: 'Stephenie Meyer', year: 2005};
const { title } = {title: 'Twilight', author: 'Stephenie Meyer', year: 2005};

console.log(twilight.title);
console.log(title)

const [firsBook, secondBook] = [
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
]

console.log(firsBook);
console.log(secondBook);

//const csvProducts = 'T-shirt,10,Amazon\nCap,5,Google\n,Pants,15,Amazon\n,Shoes,20,Google';
const csvProducts = 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';
const processCSV = (csv) => {
    const products = [];
    const lines = csv.split('\n');
    for (let line of lines) {
        const [name, price, store] = line.split(',');
        products.push({
            name: name,
            price: parseInt(price),
            store: store
        });
    }
return products;
}

const products = processCSV(csvProducts);
console.log(products);






/*const processCSV = (csv) => {
const products = [];
  const lines = csv.split('\n'); // ['T-shirt,10,Amazon', 'Cap,5,Google', 'Pants,15,Amazon','Shoes,20,Google']
for (let line of lines) {
    // line 'T-shirt,10,Amazon'
    const [name, price, store] = line.split(','); // ['T-shirt', '10', 'Amazon']
    products.push({
    name: name,
    price: parseInt(price),
    store: store
    });
}
return products;
};

const products = processCSV(csvProducts);
console.log(products);*/

const infoGeneral = {
    bootcamp: 'KeepCoding'
};

let module1 = {
    name: 'JS'
};

module1 = {...module1, ...infoGeneral };
console.log(module1)

let module2 = {
    ...infoGeneral,
    name: 'HTML'
};

console.log(module2)