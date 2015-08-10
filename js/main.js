// add scripts
var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

var firstLoop = function(arr){
  arr.forEach(function(student){
    console.log(student.name);
  });
};
// firstLoop(students);
var secondLoop = function(arr){
  arr.forEach(function(student){
    console.log(student.age);
  });
};
// secondLoop(students);
var thirdLoop= function(arr){
  arr.forEach(function(student){
    console.log(student.name + ", " + student.city);
  });
};
// thirdLoop(students);
var fourthLoop= function(arr){
    arr.forEach(function(student){
     if (student.city === "Boulder"){
    console.log(student.name+ " is from "+ student.city);
     }
  });
};
// fourthLoop(students);
var fithLoop= function(arr){
  arr.forEach(function(student){
    if (student.age > 25){
      console.log( student.name + " is older then 25");
    }
  });
};
fithLoop(students);
// TODO: refactor to use more opp and push to github
