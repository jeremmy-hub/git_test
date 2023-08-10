const body = document.querySelector('body');
body.setAttribute('style', 'display:flex;width:100vw;height:100vh');

let input = document.createElement('input');
input.value = 5;
let inputLabel = document.createElement('label');
let submitButton = document.createElement('button');
let valuesDiv = document.createElement('div');
let submitButton_clicked = false;

valuesDiv.setAttribute('style' , 'width:100px;height:60px; display: flex;left:0;top:0;flex-direction: column;align-items: space-around; justify-content: stretch;position:absolute;');
input.setAttribute('type', 'number');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('style', 'background-color:coral;flex:1');
input.setAttribute('style', 'background-color:black;color:white;flex:1;text-align:center;');
inputLabel.setAttribute('style', 'background-color:coral;flex:1;text-align:center;');
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
    
    const parentStyle = 'display:flex;flex:1;flex-wrap:wrap;justify-content:center;align-content:center;column-gap:1vw;row-gap:1vw;';

    parentDiv.setAttribute('style', parentStyle);
    parentDiv.classList.add('container');
    
    for(let i = 0; i < (no_of_divs * no_of_divs); i++){
        let div = document.createElement('div');
        let div_hue = Math.floor(Math.random() * 360);
        let div_saturation = Math.floor(Math.random() * 100);
        let div_light = Math.floor((Math.random() * 50) + 40);
        
        let divStyle = `width:calc((100vw / ${no_of_divs}) - 1vw);height:calc((100vw / ${no_of_divs}) - 1vw);border:1px solid black;background-color:hsl(${div_hue}, ${div_saturation}%, ${div_light}%);`;
        
        div.setAttribute('style', divStyle);
        
        div.classList.add(`container_item_${i}`);
    
        div.addEventListener('mouseover', function(){
            let background_color = this.style.backgroundColor;
            let newBackgroundColor = darkenRGBColor(background_color, 30);
            this.style.backgroundColor = newBackgroundColor;
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
    body.appendChild(prepareLayout(input.value));
    submitButton_clicked = true;
}






