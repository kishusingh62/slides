let but = document.querySelector(".like");
let imgg = document.querySelector(".image");
let m = document.querySelector(".main");
let i=0;
imgg.style.backgroundImage='url("images/3.jpg")';
setInterval(function(){
    var a=("images/"+(i%3+1)+".jpg");
    imgg.style.backgroundImage=`url("${a}")`;
    i++;
},5000);
but.style.order=0;
but.addEventListener("mouseover",()=>{
    if(but.style.order==2){
        but.style.order=0;
    }
    else{
        but.style.order=2;
    }
});
console.log(m);
m.addEventListener("click",()=>{
    alert("haaw baby ... HUM thoda saitaani kya krr diya aapne toh HATED HIM wala hi button dba diya...aapko ye toh nhi krna chahiye tha :( (crying face)");
});
