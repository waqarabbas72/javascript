// weekly task
let myArray = [];
console.log(myArray);

// personal details
let myData = {
    firstName : "Waqar",
    lastName : "Abbas",
    fatherName : "Niat Ali",
    age : 19,
    address : "Danyore",
}

let educationDetails = {
    education : "matriculation",
    class : "11th",
    college : "Bright Future public School",
}

myArray.unshift(myData);
console.log(myArray);

myArray.push(educationDetails);
console.log(myArray);

let myBio = `My name is ${myArray[0].firstName + " " + myArray[0].lastName}. My father name is ${myArray[0].fatherName}. I am ${myArray[0].age} yrs old. I live in ${myArray[0].address}. My education is ${myArray[1].education}. I read in class ${myArray[1].class} in ${myArray[1].college}.`

console.log(myBio);
myArray.shift(myData);
console.log(myArray);

myArray.pop(educationDetails);
console.log(myArray);

