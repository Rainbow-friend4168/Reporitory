'use strict';
const imgs = document.querySelectorAll('.img999');
const line = document.querySelector('.line');
let count = 0;
let width;
function init(){
    width = document.querySelector('.slider').offsetWidth;
    line.style.width = width*imgs.length+'px';
    imgs.forEach(i =>{
        i.style.width = width+'px';
        i.style.height = 'auto';
    });
    line.style.transform='translate(-'+count*width+'px)';
    console.log(width);
};
init();
window.addEventListener('resize', init);
document.querySelector('.next').addEventListener('click', function(){
    count++;
    console.log(count);
    if(count>=imgs.length){
        count = 0;
    }
    line.style.transform='translate(-'+count*width+'px)';
})
document.querySelector('.back').addEventListener('click', function(){
    count--;
    console.log(count);
    if(count<0){
        count = imgs.length-1;
    }
    line.style.transform='translate(-'+count*width+'px)';
})