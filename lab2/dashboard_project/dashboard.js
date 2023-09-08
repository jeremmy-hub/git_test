const projects_boxes = document.querySelectorAll('.projects-item');
const project_box1 = document.querySelector('.projects-item1');


function display_open_button(item){
    item.onmouseover = function (){
        item.firstElementChild.style = 'display:grid';
        item.firstElementChild.classList.toggle('button_on_hover');
        item.classList.toggle('button_on_hover');
    }

    item.onmouseout = function(){
        item.firstElementChild.style = 'display:None';
        item.firstElementChild.classList.toggle('button_on_hover');
        item.classList.toggle('button_on_hover');
    }
    
}


function generateProject(){
    let randomInt = Math.ceil((Math.random() * 30) + 1);
    return;
}

projects_boxes.forEach(display_open_button);