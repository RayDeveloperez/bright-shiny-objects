// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

/*

functionName: CreateUser
parameters: 2 Strings (firstName,lastName)

return: object 
{
    firstName: string
    lastName: string
}

putting firstName & lastName into an object;

*/

function createUser(firstName,lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}
// console.log(createUser('Mesuara', 'Kaleziq'))

/*
functionName: setAge
parameters: user(object),age(number)
user = 
{
    firstName: string
    lastName: string
}
return: 
user{
    firstName: string
    lastName: string
    age: number
}

*/


function setAge(user,age){
    user.age = age;
    return user;
}

// console.log(setAge(createUser('Ray','Perez'),25));
// let newUser =setAge(
//     {firstName: "ray",lastName: "perez"},30)

//     console.log(newUser)

function incrementAge(user,age){
    user.age = user.age + 1;
    return user;
}
// console.log(incrementAge(createUser('Angela','Merkel'),66));

/*
Car = {
    make: string
    model: string
    year: Number
    needsMaintaintenance: boolean

}

return 
car object
*/




function fixCar(car){
    car.needsMaintenance = false;
    return car;
    }
// console.log(fixCar({
//     make: "Ford",
//     model: "Mustang",
//     year: "1969",
//     needsMaintenance: true
// }));





/* 
functions addGrades
parameters: student objects and grades array

student = {
    name: string;
    email: string;
    grades: array; numbers
}

grades param - array of numbers

return student object 



*/
function addGrades(student, newGrades){

        student.grades = student.grades.concat(newGrades); 


    return student;
}
let student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80]
};

let newGrades = [70,71,72]
console.log(addGrades(student, newGrades))
/**
 Get Data type
*/
function getDataType(obj, key){
    return typeof obj[key]
}
// console.log(getDataType(key, "make"));
/*ADD TODO */
function addTodo(toDoArray, newTodo){
    toDoArray.push(newTodo);
    return toDoArray;
}
// console.log(addTodo(toDoArray))
/*
addSong -- 
*/
function addSong(playlist, newSong){
    playlist.songs.push(newSong);
    playlist.duration=playlist.duration+newSong.duration;
    return playlist
}
    let playlist = {
        title: 'My jams',
        duration: 7,
        songs: [
            {
                title: 'Texas Sun',
                artist: 'Khruangbin',
                duration: 4
            },
            {
                title: 'Malamente',
                artist: 'Rosalia',
                duration: 3
            }
        ]
}
//console.log('Song in array at index 1: ')
//console.log(playlist.songs[1])

function updateReportCard(report, newGrade){
    report.grades.push(newGrade);// add new grade to array
    let hG = report.grades[0] //initializes highest score
    let lG = report.grades[0] //initializes lowest score
    let sum=0 //initializes sum at zero
    for(let i = 0; i<report.grades.length; i++){
        sum = sum + report.grades[i]
        if (report.grades[i]<report.grades[i+1] && report.grades[i]<lG){lG=report.grades[i];}
        else if (report.grades[i]>report.grades[i+1] && report.grades[i+1]<lG){lG=report.grades[i+1];}
        else if (report.grades[i]>report.grades[i+1] && report.grades[i]>hG){hG=report.grades[i];}
        else if (report.grades[i]<report.grades[i+1] && report.grades[i+1]>hG){hG=report.grades[i+1];}
    }//find highest and lowest values and sums all scores together
    avg = sum/(report.grades.length); //calculates average grade
    avg = Number((Math.round(avg * 2) / 2).toFixed(1)) //rounds average grade to nearest .5 or 1
    report.lowestGrade=lG;
    report.highestGrade=hG;
    report.averageGrade=avg;
    return report
}
// console.log(updateReportCard(newGrade))

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
