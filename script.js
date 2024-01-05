const container = document.getElementById("container");
container.style.display = "flex";
let tempDoc = document.createDocumentFragment();
for(let i=0; i<16;i++){
let gridDiv = document.createElement('div');
gridDiv.style.display = "flex";
gridDiv.style.width = "25%";
gridDiv.style.height = "25%";
gridDiv.style.border = "1px solid magenta"
tempDoc.appendChild(gridDiv);

}
container.appendChild(tempDoc);