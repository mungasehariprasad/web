//getElementById
// const heading=document.getElementById('heading')
// console.log(heading)

//2.getElementsByTagName
// const h=document.getElementsByTagName('h1')
// console.log(h[0])

//4. querySelection
// const h=document.querySelector('.heading')
// console.log(h)

//3.NEtxElementSibling

// const h=document.querySelector('.heading');
// console.log(h.nextElementSibling)  

// const h=document.querySelector('.heading');
// h.innerHTML='Web to hari'
// h.style.color='red';



//Create element
// const heading=document.createElement('h1')
// heading.innerHTML='javaScript is awesome!'
// const parent=document.querySelector('.parent')
// parent.appendChild(heading);
// console.log(heading)

//---Dom event
// const button=document.querySelector('#btn')
// const heading=document.querySelector('#heading')
// button.addEventListener('click',function(event){
//   heading.style.color='red';
//   heading.style.fontSize ='60px';
//   console.log('button clicked',event)
// });

//Project bulb on off
// const bulbSwitch=document.querySelector('#btn')
// const bulb=document.querySelector('#bulb')
// bulbSwitch.addEventListener('click',function(){
// console.log(bulb.src);
// if(bulb.src.match('off')){
//   bulb.src='imgs/bulb-on.png';
//   bulbSwitch.innerHTML='Turn OFF';
// }else{
//   bulb.src='imgs/bulb-off.png';
//   bulbSwitch.innerHTML='Turn ON';
// }

// });

const root=document.querySelector('#root');
const button=document.querySelector('button');

function creatItem(item){
  const card=document.createElement('div');
card.classList.add('card');
const photo=document.createElement('img');

photo.src=item.thubnailUrl;
const title=document.createElement('h4');

title.innerHTML=item.title;
card.appendChild(photo);
card.appendChild(title);
root.appendChild(card);

}

function displayImages(items){
  items.forEach(function(item){
    creatItem(item);
  })

 

}

button.addEventListener('click',function(){
  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then(res=>res.json())
  .then(items=>{
    displayImages(items);
  })
})


