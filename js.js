let n=prompt("Enter grid size");
const cont=document.getElementById('container');

function grid(){
  for(let i=0;i<n*n;i++){
    let dom=document.createElement('div');
    dom.classList.add('box');
  }
}