// sual 1 helli

// let a = 23;

// let b = 27;

// if(a > b){
//     console.log("a b-den böyükdür");
// }else if(a == b){
//     console.log("a ve b berberdir");
// }else{console.log("a b-den kicikdir");
// }

let students=[

    {id:1, name: "Ali", surname: "Alisoy", age:20, grade: 95},
    
    {id:2, name: "Vusala", surname: "Nabiyeva", age:34, grade: 77},
    
    {id:3, name: "Aliya", surname: "Gurbanzade", age:14, grade: 98},
    
    {id:4, name: "Sabir", surname: "Nuruyev", age:15, grade: 54},
    
    {id:5, name: "Mehman", surname: "Heydarov", age:22, grade: 100},
    
    {id:6, name: "Sevana", surname: "Mammadli", age:41, grade: 35},
    
    {id:7, name: "Ilham", surname: "Babayev", age:24, grade: 95},
    
    {id:8, name: "Namiq", surname: "Gulahmedov", age:20, grade: 95},
    
    {id:9, name: "Aygun", surname: "Kazimova", age:24, grade: 100}
    
    ]
    
//sual 2 helli

// let yeniMassiv= []

// for (let i = 0; i < students.length; i++) {
//     if (i % 2 == 0) {
//         yeniMassiv.push(students[i])
//     }
// }console.log(yeniMassiv);

// sual 3 helli

// for (const element of students) {
//     if (element.id % 2 == 1) {
//         console.log(element.name);
//     }
// }

// sual 4 helli 

// for (const element of students) {
//     if(element.age >20){
//         console.log(element);
//     }
// }

//sual 5 helli 

// let bestStudents = []

// for (let i = 0; i < students.length; i++) {
//     if (students[i].id % 2 == 0 && students[i].grade >90) {
//         bestStudents.push(students[i]);
//     }
// }
// console.log(bestStudents);

// sual 6 helli

let myArray = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].grade == 100 || students[i].grade == 95) {
        myArray.push(students[i]);
    }
}

console.log(myArray);