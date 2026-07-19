document.querySelector(".hero-image").addEventListener("mousemove",(e)=>{

const image=e.target;

const rect=image.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*8;

const rotateX=((y/rect.height)-0.5)*-8;

image.style.transform=

`perspective(1200px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

document.querySelector(".hero-image").addEventListener("mouseleave",(e)=>{

e.target.style.transform="perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";

});