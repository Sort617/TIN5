var student = {
  name: "Kurinchik",
  surnname: "Pirinchik",
  age: 22,
  grade: 3,
  ageandgrade: function () {
    console.log(this.age);
    console.log(this.grade);
  },
  studinfo: function () {
    console.log(this.name);
    console.log(this.surname);
  }

}


printobjectdetails(student);

function printobjectdetails(stud) {
  for (let i in stud) {
    console.log("OBJECT =", i, "||| TYPE =", typeof (stud[i]));
  }
}