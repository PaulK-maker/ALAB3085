//generating an array of numbers
let numbers= [
  14, 73, 28, 41, 9, 67, 85, 32, 19, 51,
  46, 98, 13, 25, 79, 38, 49, 11, 65, 22,
  59, 76, 31, 44, 88
]
//function to store numbers and calculate average using loop
function numAverage(numbers){
  let sum=0;
  for (let i=0; i<numbers.length; i++){
    sum +=numbers[i];
  }
  return sum/numbers.length;
}
console.log(numAverage(numbers))

//Take an array of strings and return the longest string.
let myCarArry = ["Sedan","SUV","Truck","Coupe","Hatchback","Wagon","Minivan",
  "Convertible","Muscle Car","Electric Vehicle","Hybrid","Crossover","Pickup","Van","Roadster"
];

function longestArry(myCarArry){
  return myCarArry.join(",");
}
let longString=longestArry(myCarArry)
console.log(longString)

//an array of strings, and a number and return an array of the strings that are longer than the given number.
stringArry= ["Sedan","SUV","Truck","Hatchback","Wagon","Minivan",
  "Convertible","Electric Vehicle","Hybrid","Crossover","Pickup","Roadster"
];
//create function and new array
function newArry(stringArry){
  let nwArry=[];
  // loop through the array and copy to nwarry
  for (let i=0; i<stringArry.length;i++){
  nwArry.push(stringArry[i]);
  }
  return nwArry;
}
console.log(newArry(stringArry,5));

//functiom that takes number n and uses recursion to count downward
function printNumbers(n){
if (n>0){
  printNumbers(n-1)
  console.log(n);
}
}
printNumbers(10);

//Thinking methodically

let myObjectArry = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


  //sort an Oject Arry by age
  const sortArry = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
    
    //call back function to sort Arry
   function sortAge(arr){
     return arr.slice().sort((a,b)=>a.age-b.age);
   }
   console.log(sortAge(sortArry))

   //In myArray filter age >50
let myArry= [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//create funtion to filter with age
  function lowAge(person){
   
    //change string to number and filter ager over 50
    return Number(person.age)<=50; 
       
     };
  const filtered = myArry.filter(lowAge);
  console.log(filtered);
  
  //map the array to change the values (https://developer.mozilla.org/
  // en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  const dataArry=[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

    const chagedArry=dataArry.map(({id,name, occupation,age}) =>({id, name,job:occupation,
   age:(Number(age.toString())+1) }))

    console.log(chagedArry)

    //Use the reduce method to calculate the sum of the ages.(https://developer.mozilla.org/en-US/docs/Web/
    // JavaScript/Reference/Global_Objects/Array/reduce)
    
    const ageArray=[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
      { id: "48", name: "Barry", occupation: "Runner", age: "25" },
      { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
      { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
      { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
      
      //use reduce method to calculate
      const sumAges=ageArray.reduce((accumalator, currentValue) =>{return accumalator+Number(currentValue.age},0)
//Calculate average
      const average=sumAges/ageArray.length;

      //Thinking critically; Take an object and increment its age field
//create an arry with object age
      const ageIncrArray=[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// create function to increment age
        function incremtAge(person){
         return {
...person, // spread property copy age from the object
age:(+person.age +1).toString(), // change and replace the age 
// update the date to current date
"updated_at":new Date()

          };
        }
        //use .map to appy the increment 
        const incremAge=ageIncrArray.map(incremtAge)
        console.log(incremAge)