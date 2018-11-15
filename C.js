var student = {
    subject: ["SKJ", "SAD", "TIN", "BYT"]
}

function createObjects(name, surname, id, subject){
    var stud = Object.create(student);
    stud.name = name;
    stud.surname = surname;
    stud.id = id;
    stud.subject = subject;
    return stud;
}

var result = createObjects("Mirik", "Piririk", 14666, ["SKJ", "TIN", "BYT"]);

console.log(result.id + ' |', result.name, "|", result.surname, "|", result.subject);