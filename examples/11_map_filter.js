console.log('11');

const numberList = [20, 50, 75];

let newList = [];

for (let number of numberList) {
    newList.push(number * 2);
};

console.log(newList);

function double (number) {
    return number * 2;
};
//map [20, 50, 75]
/*
const newListMap = numberList.map(function (number, index,) { 
    console.log(number, 'index', index)// Recorre la lista iterando el numero de veces como posiciones tiene el array
    return number * 2;
});*/

const newListMap = numberList.map(number => number * 2 ); 




//const newListMap = numberList.map(double);


//filter
const filterList = numberList.filter(function (number) {
    console.log('dentro del filter', number);
    return number < 50;
});

const filterListV2 = numberList.filter(number => number < 50)
;
console.log(filterListV2);
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

const books2000 = books.filter( book => book.year > 2000 ).map(book => book.title).join(', ');
console.log(`EL listado es ${books2000}`);
//books2000 = books2000.map( book => book.title );
