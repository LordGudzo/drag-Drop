const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (let placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', drop);
}

function dragStart(e){
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragEnd(e){
  e.target.classList.remove('hold','hide');  
}

function dragOver(event) {
 event.preventDefault();
}

function dragEnter(event) {
  event.target.classList.add('hovered');
  visionPlace();  
}

function dragLeave(event) {
  event.target.classList.remove('hovered');
}

function drop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
  noVisionPlace();
}

function visionPlace(){
  for (let placeholder of placeholders ) {
    placeholder.classList.add('place');
  }
}
function noVisionPlace(){
  for (let placeholder of placeholders ) {
    placeholder.classList.remove('place');
  }
}