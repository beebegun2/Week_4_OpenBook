//Rewrite the following three functions as arrow functions. Make sure to assign them to a const identifier.

//function createFullName(firstName, lastName) {
  //return firstName + " " + lastName;
//}
/*const firstName = "Shannon"
const lastName = "Beebe"

const createFullName = (firstName, lastName) => `${firstName}, ${lastName}`;
console.log(createFullName('Shannon Beebe'));
*/
//function doubleNumber(number) {
  //return number * 2;
//}

/* const number = 48

 let doubleNumber = (number) => number;
 console.log(number * 2);
*/

/*function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

const array = [10,11,12,13,14,15]

let getEvenNumbers = (array) => array
let evenNumbers = [];
for (let i of array) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);
*/

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: 'Chuck',
        address: {
            street: '9876 E LIberty Rd',
            city: 'Springfield',
            zip: '987478',
            state: 'OR'
        },
        membershipLevel: 'SILVER',
        age: 45
    },
    {
        name: 'Alice',
        address: {
            street: '5545 W 5468 ST E',
            city: 'Palmdale',
            zip: '93550',
            state: 'CA'
        },
        membershipLevel: 'BRONZE',
        age: 18
    },
  ];

  const filterByCustName = (arr, char) => {
//      const filteredArr = []
//      for (entry of arr) {
//          console.log(entry)
//          console.log(entry.name[0])
//          if (entry.name[0] === char) {
//              filteredArr.push(entry)
//          }
//      }
//      console.log(filteredArr)
//      return filteredArr
for (let i = 0; i < arr.length -1; i++) 
console.log(arr.filter(entry => entry.name[0] === char))
return arr.filter(entry => entry.name[0] === char)
        }
      
  filterByCustName(customers, 'C')
          
        