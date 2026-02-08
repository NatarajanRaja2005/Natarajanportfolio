const btn=document.getElementsByClassName('btn2')[0];
const nav=document.getElementsByClassName('loom')[0];
btn.addEventListener('click',()=>{
    console.log("Ho");
    nav.classList.toggle('active');
});
