/* 
    Organização, padronização e escrita 
  - remover comentários desnecessários
  - padronização de "," e ";" tem ou não tem
  - identar o código com TAB
  - dar espaço vertical ao iniciar um novo bloco de código 
  - escrever código em inglês
*/

const studentsclassA = [
  {
    name: "Daury",
    grade: 10,
  },
  {
    name: "Pedro",
    grade: 9,
  },
];

const studentsclassB = [
  {
    name: "Ellen",
    grade: 5,
  },
  {
    name: "Henrique",
    grade: 4,
  },
  {
    name: "Mari",
    grade: 2,
  },
];

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
  }
  return sum / students.length;
}

function sendMessage(average, studentsclass) {
  if (average > 5)
    console.log(`${studentsclass} average: ${average}. Congratulations!`);
  else console.log(`${studentsclass} average: Is not good.`);
}

function markAsFlunked(student) {
  student.flunked = false;

  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked!`);
  }
}

function studentsFlunked(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

const average1 = calculateAverage(studentsclassA);
const average2 = calculateAverage(studentsclassB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

studentsFlunked(studentsclassA);
studentsFlunked(studentsclassB);
