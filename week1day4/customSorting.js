var students = [
  { id: 1, name: "bruce",    age: 20 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];

students.sort(function(a,b){
  var nameA=a.name.toLowerCase()
  var nameB=b.name.toLowerCase()
    if (nameA > nameB) {
    return 1
  } else if (nameA === nameB) {
    return a.age - b.age;
  }
})

console.log(students)