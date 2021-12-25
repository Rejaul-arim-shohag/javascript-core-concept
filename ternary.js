// const taka = 550;
// // let food;
// // if(taka>400){
// //     food = "Briani and kaccchi"
// // } else{
// //     food = "alur vorta"
// // };
// // console.log(food)

// // let food = taka>500? "Briani and chicken": "Alur vorta and dal";
// // console.log(food)

// // // const getFee =(isMember)=>{
// // //     return isMember? "$2.00": "$10.00"
// // // };
// // // console.log(getFee(true))

// // function chargeBill(isActive){
// //     if(isActive===true){
// //         console.log("your Bill is $100.00 and your Discount fee is $40.00")
// //     }else if(isActive===false){
// //         console.log("your Charged bill is 5457")
// //     }
// //      else{
// //         console.log("your Bill is $490.00")
// //     }
// // }
// // chargeBill(true)

// // const showBlueButton = (isActive)=>{
// //     let button = isActive? "displayBlueSign":"hideBlueSign";
// //     console.log(button)
// // };
// // showBlueButton(false)

// // let access;
// // const accessToParlament = (isMinister)=>{
// //     access = isMinister? "You can go in Bangladesh parlament": "sorry, you cannot go to perlament";
// //     console.log(access);
// // };
// // accessToParlament(false)

// // function call in ternary operator
// let userInformation;
// const loadUser=(issAccount)=>{
//     console.log("This is our login client ")
// };

// const createAccount = ()=>{
//     console.log("create your account")
// };

// userInformation? loadUser(): createAccount();




//string to number
// const numberToString = +"hello";
// console.log(typeof numberToString);

// //number to string
// const stringToNumber = 574 + '';
// console.log(typeof stringToNumber);

//function default parameter
const addNumber=(num1, num2)=>{
    num2=num2||50;
    const result = num1+num2;
    return result;
};
const myNum = addNumber(56);
console.log(myNum);
//thats very shortcut
const addManyNumber = (num3, num4, num6=5, num5=90, num7=900)=>{
    const totalResult = num3+num4+num5+num6+num7;
    return totalResult
};

const result = addManyNumber(23, 45);
console.log(result)
