let n=16;
const cont=document.getElementById("container");
let a="black";

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


grid(n);