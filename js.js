let n=16;
const cont=document.getElementById("container");
let a="black";

//code for blue colour
let blue=document.querySelector('#blue');
blue.addEventListener('click',function(e){
  a="blue";
})

//code for red colour
let red=document.querySelector('#red');
red.addEventListener('click',function(e){
  a="red";
})

//code for green colour
let green=document.querySelector('#green');
green.addEventListener('click',function(e){
  a="green";
})

//code for black colour
let black=document.querySelector('#black');
black.addEventListener('click',function(e){
  a="black";
})

//code for black colour
let yellow=document.querySelector('#yellow');
yellow.addEventListener('click',function(e){
  a="yellow";
})

//code for random colour

let rnd=document.querySelector('#random');
rnd.addEventListener('click',function(e){
  a='#'+Math.floor(Math.random()*16777215).toString(16);
})

//code for erase
let erase=document.querySelector('#erase');
erase.addEventListener('click',function(e){
  a="#53A0AC";
  document.body.style.cursor = "url('eraser.png',auto)";
})

//Function to make grid
function grid(n){
  cont.style.gridTemplateColumns= `repeat(${n},1fr)`;
  cont.style.gridTemplateRows= `repeat(${n},1fr)`;
  // Create array to make grids
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
    let div=document.createElement('div');
    div.className='box';
    div.style.backgroundColor="#53A0AC";
    cont.appendChild(div);
}}
  //change the colour of boxes when hovered upon
  let boxes=document.querySelectorAll("div.box");
  boxes.forEach(square=>{
  square.addEventListener('mouseover',function(e){
  e.target.style.backgroundColor=a;
})
}) ;
}

//function to clear the grid
function clear(){
  let last=cont.lastElementChild;
  while(last){
    cont.removeChild(last);
    last=cont.lastElementChild;
  }
}

//code for reset button
let reset=document.querySelector('#reset');
reset.addEventListener('click',function(e){
  n=prompt("Enter grid size");
  clear();
  grid(n);
})

//code for clear button
let clr=document.querySelector('#clear');
clr.addEventListener('click',function(e){
  clear();
  grid(n);
})


grid(n);