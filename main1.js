const loader=document.querySelector('.loader');
const main1=document.querySelector('.main1');
function init(){
  setTimeout(()=>{
    loader.style.opacity=0;
    loader.style.display='none';
    main1.style.display='block';
    setTimeout(()=>(main1.style.opacity=1),50);
  },4000);
}
init();