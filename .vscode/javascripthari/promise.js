//callback
// function waitforSevenSecodes(){
//     let ms=3000+new Date().getTime();
//     while(new Date()<ms){}
//   }
function register(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    
    
     console.log('Register End')
      resolve('Error while registering...')
    },1000);
  });
 
  }
  function sendEmail(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('Email End')
        resolve();
      },2000);
    });
  
  
  }
  function login(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('login End')
        resolve();
        
      },3000);
    });
  
   
  }
  function getUserData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('getUserData End')
        resolve();
        
      },4000);
    });
   
  
  }
  function displayUserData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log('displayUserData End')
        resolve();
        
      },5000);
    });
  
  
  }
  
  // register(function(){
  //   sendEmail(function(){
  //     login(function(){
  //       getUserData(function(){
  //         displayUserData(function(){
  
  //         });
  //       });
       
  //     });
     
  //   });
   
  // });
  
  // register()
  // .then(sendEmail)
  // .then(login)
  // .then(getUserData)
  // .then(displayUserData)
  // .catch((err)=>{
  //   console.log('Error',err)

  // })
  
  //Async-await
  (async function authenticate(){
   try{
    await register();
    await sendEmail();
    await getUserData();
    await displayUserData();
   }catch(err){
    console.log('Error',err)
   }

  })().then(()=>{
    console.log('All set');
  })
  // .catch((err)=>{
  //   console.log('Error',err)
  // });
 
  console.log('other Appllcation Work')
  