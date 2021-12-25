// //without destructure
// const number = [12, 15, 56, 87, 879, 9676];
// const num3 = number[2]
// // console.log(num3)

// //array Destructure
// const numbers = [12, 15, 56, 87, 879, 9676];
// // const [num1, num2, ...rest] = numbers;
// // console.log(rest)

// //without object destructing 
// const students = [
//     {name: "Rejaul karim", age: 21, id: 1},
//     {name: "Babul Hossen", age: 48, id: 2},
//     {name: "jesmin begum", age: 38, id: 3}
// ];
// const idOneName = students[0].name;
// // console.log(idOneName);

// const arrayFy=(num)=>{
//     return [num, num+5]
// };
// const [num1, num2] = arrayFy(8);
// console.log(num1, num2)


//object  destructing
const person={id: 1, name: "Mohammad Rejaul karim", fatherName: "Mahabub Alam", motherName: "Jesmin Begum"};
// const name = person.name;
// console.log(name)
const {id, name, fatherName, motherName} = person;
// console.log(name, fatherName, motherName)

// const students = [
//         {name: "Rejaul karim", age: 21, id: 1},
//         {name: "Babul Hossen", age: 48, id: 2},
//         {name: "jesmin begum", age: 38, id: 3}
//     ];
const numbers=[12, 15, 56, 87, 879, 9676];
const newNumbers = [...numbers, 78566]
// console.log(newNumbers)

const x = 15;
const y = 16;
const objectConvert = {x, y};
// console.log(objectConvert)
