const body = document.querySelector('body');
body.setAttribute('style', 'display:flex;width:100vw;height:100vh;justify-content:space-around;align-items:center;');

let input = document.createElement('input');
input.value = 5;
let inputLabel = document.createElement('label');
let submitButton = document.createElement('button');
let valuesDiv = document.createElement('div');
let submitButton_clicked = false;


valuesDiv.setAttribute('style' , 'border:3px solid black;border-radius:10px;display:flex;flex-direction:column;align-items:stretch;gap:5vw;justify-content:center;gap:1vw;');
input.setAttribute('type', 'number');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('style', 'background-color:coral;border:1px solid black;border-radius:10px;');
input.setAttribute('style', 'background-color:black;color:white;text-align:center;border:1px solid black;border-radius:10px;');
inputLabel.setAttribute('style', 'background-color:coral;text-align:center;border:1px solid black;border-radius:10px;');
inputLabel.textContent = 'No of Divs: ';
submitButton.textContent = 'generate';

valuesDiv.appendChild(inputLabel);
valuesDiv.appendChild(input);
valuesDiv.appendChild(submitButton);

body.appendChild(valuesDiv);

function darkenRGBColor(rgbString, factor) {
  // Parse the RGB string into an array of values
  const rgbValues = rgbString.slice(4, -1).split(',').map(value => parseInt(value.trim()));

  // Darken each component by the specified factor
  const darkenedValues = rgbValues.map(value => Math.max(0, value - factor));

  // Combine the darkened values into a new RGB string
  const darkenedRGBString = `rgb(${darkenedValues.join(', ')})`;

  return darkenedRGBString;
}

function prepareLayout(no_of_divs){   
    const parentDiv = document.createElement('div');
    
    const parentStyle = 'display:flex;width:80vw;height:80vw;flex-wrap:wrap;justify-content:center;align-content:center;gap:1vw;border:3px solid black;border-radius:10px;';

    parentDiv.setAttribute('style', parentStyle);
    parentDiv.classList.add('container');
    
    for(let i = 0; i < (no_of_divs * no_of_divs); i++){
        let div = document.createElement('div');
        let div_hue = Math.floor(Math.random() * 360);
        let div_saturation = Math.floor(Math.random() * 100);
        let div_light = Math.floor((Math.random() * 50) + 40);
    
        
        let divStyle = `width:calc((80vw / ${no_of_divs}) - 1vw);height:calc((80vw / ${no_of_divs}) - 1vw);border:4px solid black;background-color:hsl(${div_hue}, ${div_saturation}%, ${div_light}%);border-radius:5px;`;
        
        div.setAttribute('style', divStyle);
        
        div.classList.add(`container_item_${i}`);
    
        div.addEventListener('mouseover', function(){
            let background_color = this.style.backgroundColor;
            let newBackgroundColor = darkenRGBColor(background_color, 30);
            this.style.backgroundColor = newBackgroundColor;
            if(this.style.backgroundColor === 'rgb(0, 0, 0)'){
                this.style.visibility = 'hidden';
            }
        });

        parentDiv.appendChild(div);

    }
    return parentDiv;
}

submitButton.onclick = function(){
    if(submitButton_clicked){
        let to_be_removed = body.children[2];
        body.removeChild(to_be_removed);
    } 
    try{
        body.appendChild(prepareLayout(Math.abs(input.value)));
        submitButton_clicked = true;
    }
    catch (e){
        console.log(e);
    }
}






