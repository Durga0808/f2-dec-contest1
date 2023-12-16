const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

let mydata=data;

// 1. Print Developers
function printDeveloper() {
  console.log("Developers:");
  mydata.forEach((person) => {
    if (person.profession.toLowerCase() === "developer") {
      console.log(person);
    }
  });
}

// 2. Add Data
function addData() {
  let name = prompt("Enter name:");
  let age = prompt("Enter age:");
  let profession = prompt("Enter profession:");

  let newData = { name: name, age: parseInt(age), profession: profession };
  mydata.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
    const filteredData = mydata.filter((person) => person.profession.toLowerCase() !== "admin");
    console.log("Admins removed.");
  
     mydata = filteredData;
    
    console.log(mydata);
}

// 4. Concatenate Array
function concatenateArray() {
        let dummyArray = [
            { name: "dp", age: parseInt(26), profession: "developer" },
            { name: "durga", age: parseInt(28), profession: "admin" },
        ];
        
       let combinedArray = mydata.concat(dummyArray);
        console.log("Concatenated Array:", combinedArray);

}

// 5. Average Age
function averageAge() {
  let sum = mydata.reduce((acc, dev) => acc + dev.age, 0);
  let average = sum / mydata.length;
  console.log("Average Age:", average.toFixed(2));
}

// 6. Age Check
function checkAgeAbove25() {
  let isAbove25 = mydata.some((dev) => dev.age > 25);
  console.log("At least one person is above 25:", isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  let professionsSet = new Set(mydata.map((dev) => dev.profession));
  console.log("Unique Professions:", [...professionsSet]);
}

// 8. Sort by Age
function sortByAge() {
  mydata.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", mydata);
}

// 9. Update Profession
function updateJohnsProfession() {
  let john = mydata.find((dev) => dev.name.toLowerCase() === "john");
  if (john) {
    john.profession = "manager";
    console.log("John's profession updated to 'manager'");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  let developers = mydata.filter(
    (dev) => dev.profession.toLowerCase() === "developer"
  );
  let admins = mydata.filter((dev) => dev.profession.toLowerCase() === "admin");
  console.log(
    `Total Developers: ${developers.length}, Total Admins: ${admins.length}`
  );
}
