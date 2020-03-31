let n=5;
const cont=document.getElementById("container");

function grid(n){
  cont.style.gridTemplateColumns= `repeat(${n},1fr)`;
  cont.style.gridTemplateRows= `repeat(${n},1fr)`;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
    let divs=document.createElement('div');
    divs.className='box';
    divs.style.backgroundColor="red";
    cont.appendChild(divs);
}}

grid(n);