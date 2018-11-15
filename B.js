function Student(id, firstName, lastName, grades) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;
  this.printInfo = function () {
    var avg = grades.reduce((total, curr) => total + curr, 0) / grades.length;
    console.log(`First Name = ${firstName} ||| Last name =  ${lastName} ||| Average grade = ${avg} `);
  };

}

var st1 = new Student(1, "Kukushkin", "Pirushkin", [2, 2, 2, 3]);
var st2 = new Student(2, "Anna", "Pirushkina", [3, 2, 3, 4]);

st1.printInfo();
st2.printInfo();