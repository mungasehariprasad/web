// const laptop={
//   model:'xxx',
//   color:'white'
// }
// console.log(laptop.color);
// let language='hariprasad';
// console.log(language);

// const secondsInminte=60;
//function scope
// var language='javascript';
// console.log(language)

//block scope
// if(true){
//   var age=30;

// }
// console.log(age)

//Hoisting.
// console.log(greeting);
// let greeting='hari'



// let age=23;
// age='hari'
// console.log(age)

// 1)primitive data type 
// single value stored in primitive data types
//1.Number
// let age=23;
// //2. String
// let name='hari'
// //3.boolen
// //ture/false
// let isloggedInd=true;
// //4.undefined
// let num;
// console.log(num);
//5.BigInt


//2) Structural type
//1.object
//1.1. function Non-data structure
//1.2 arrays 

//Assignment operator
//=
//Arithmetic Operator
/*
+
-
*
/
*/


// const actors=[
//   {
//     name:'Actor 1',
//     payment:200
//   },
//   {
//     name:'Actor 2',
//     payment:400
//   },
//   {
//     name:'Actor 3',
//     payment:600
//   }
// ];
// for(let i=0;i<actors.length;i++){
//   actors[i].payment=actors[i].payment-10;
// }
// console.log(actors)

// const students=[
//   {
//     name:'Hari Mnugase',
//     marks:78
//   },
//   {
//     name:'Rushi Mnugase',
//     marks:70
//   },
//   {
//     name:'Naru Mnugase',
//     marks:75
//   }
// ];
// const failed= students.filter((students)=>students.marks<95)
// {
  
// if(students.marks<74){
// return true;

// }

//   return false;
// });
// console.log(failed)

//Map
// const users=[
//   {
//     fname:'john',
//     lname:'Doe'
//   },
//   {
//     fname:'Hari',
//     lname:'Mungase'
//   }
// ];
// const final= users.map((users)=>{
// return {
//   fullname:`${users.fname} ${users.lname}`
// };
// });
// console.log(final)



//Reduce

const movies=[
  {
    name:'Interstellar',
    budget:5000
  },
  {
    name:'social',
    budget:8999
  },
  {
    name:'Matrix',
    budget:49000
  }

];
// let total=0;
// movies.forEach((movies)=>{
// total+=movies.budget
// })
// console.log(total)
// const total= movies.reduce((acc,movies)=>{
// acc+=movies.budget;
// return acc;
// },0);
// console.log(total)


//Indexof
// const admins=[2,1,5];
// const user={
//   name:'xyz',
//   id:6
// }
// const isAdmin=admins.indexOf(user.id) >-1;
// console.log(isAdmin)
 
//includes
// console.log(admins.includes(user.id))


//find
// const users=[
//   {
//     name:'xyz',
//     id:1
//   },
//   {
//     name:'abc',
//     id:2
//   },
//   {
//     name:'pqr',
//     id:3
//   },
//   {
//     name:'rst',
//     id:5
//   }
// ];

// const myuser= users.find((users)=>{
//   return users.id ===3;
//   // if(users.id===2){
//   //   return true;
//   // }
//   // return false;
// })
// console.log(myuser)




