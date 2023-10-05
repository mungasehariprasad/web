// function login(username,password){
// console.log(`${username} , .Logged in successfully`)
// }
// login('hari');

// function upperCase(str){
//   console.log(str.toUpperCase())
// }
// upperCase('hariprasad') 


// function formatText(text,formatcb){
//   return typeof formatcb==='function'?formatcb(text):text.toUpperCase();
// }
// const result=formatText('hari',function(text){
// return text.charAt(0).toUpperCase()+text.slice(1);
// });
// console.log(result);

//IIFE (Immediaely invoked function expression)
// (function setuo(){
//   console.log('setup done!')
// })();

const login=()=>{
  console.log("login")
}
login() 