const user = {
    name: "Rejaul karim",
    age: 21,
    favouritePersons:"Father and Mother"
}
// const jsonData = JSON.stringify(user);
// console.log(jsonData)
localStorage.setItem("user", JSON.stringify(user));
const storedPerson = localStorage.getItem("user")
const parsedObject = JSON.parse(storedPerson);
const keys  = Object.values(parsedObject);
console.log(keys)
