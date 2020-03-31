const container = document.querySelector('#container');
let initgridSize=6;










function drawGrid(gridSize, container) {
 
  var gs = parseInt(gridSize);
  const totalSize = gs * gs;
  for(let i=0; i<totalSize; i++) {
    var gridDiv = document.createElement('div');
    gridDiv.classList.add('box');
    gridDiv.style.width = Math.floor(containerSize / gs) + 'px';
    gridDiv.style.height = gridDiv.style.width;
    gridDiv.style.backgroundColor = 'white';
    container.appendChild(gridDiv);
    gridDiv.addEventListener('mouseover', changeColor);
  }
}
drawGrid(initgridSize, container);