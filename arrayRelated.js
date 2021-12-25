const products=[
    {id:1, name: "phone", price: 100},
    {id:2, name: "laptop", price: 200},
    {id:3, name: "Tablet", price: 400},
    {id:4, name: "watch", price: 700},
    {id:5, name: "iphone", price: 1000}
];
const productPrice = products.map(product=>{
    return product.price
})

const productsFilterById = products.filter(product=>product.id !=2);
// console.log(productsFilterById)
const productFindById = products.find(product => product.id==3);
console.log("productFindById", productFindById)


// console.log(productPrice)
// const productName = products.forEach(product=>console.log(product.name));
// console.log(productName)
const numbers=[2,3, 4, 5, 6, 7, 8]
const arrayMultiplied = numbers.map(number=> number*2);
// console.log(arrayMultiplied)

// let words = ['one', 'two', 'three', 'four']
// words.forEach(function(word) {
//   console.log(word)
//   if (word === 'two') {
//     words.shift() //'one' will delete from array
//   }
// }) // one // two // four

// console.log(words);  //['two', 'three', 'four']

const cheaper = products.filter(product =>product.price>200);
// console.log("cheaper", cheaper)

const onlyCheaper = products.find(product=>product.price<200);
// console.log("onlyCheaper", onlyCheaper)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bisons'));