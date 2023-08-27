
const DISPLAYER = document.querySelector('.display_container');
const CHARACTER_BUTTONS = document.querySelectorAll('.character');
const OPERATOR_BUTTONS = document.querySelectorAll('.operator');
const CLEAR_OPERATOR = document.querySelector('.clear');
const DELETE_OPERATOR = document.querySelector('.delete');
const COMPUTE = document.querySelector('.compute');

CHARACTER_BUTTONS.forEach(btn=>{
   btn.addEventListener('mousedown',(event)=>{
    DISPLAYER.textContent += btn.textContent;
   })
});

OPERATOR_BUTTONS.forEach(btn=>{
   btn.addEventListener('mousedown',(event)=>{
    DISPLAYER.textContent += btn.textContent;
   })
});

function clearScreen(){
    DISPLAYER.textContent = '';
}

function deleteLastCharacter(){
    let text = DISPLAYER.textContent.split('');
    text.pop();
    DISPLAYER.textContent = text.join('');
}

CLEAR_OPERATOR.addEventListener('mousedown',(event)=>{
    clearScreen();
})

DELETE_OPERATOR.addEventListener('mousedown',(event)=>{
    deleteLastCharacter();
})

COMPUTE.addEventListener('click',(event)=>{
    if(DISPLAYER.textContent != ''){
        let myCalculator = new calculator()
        let calculation_expression = DISPLAYER.textContent;
        // let result = eval(calculation_expression);
        // DISPLAYER.innerHTML = `${calculation_expression}<br/>${result}`;
        myCalculator.compute(calculation_expression);
    }
})
class calculator{
    add(a,b) {
        try{
            return parseInt(a) + parseInt(b);
        }
        catch (error){
            console.log(error);
        }    
    }

    subtract(a,b){
        try{
            return parseInt(a) - parseInt(b);
        } catch (err) {
            console.log(err);
        }
    }

    divide(a,b){
        try {
            return (parseInt(a) *10) / (parseInt(b) * 10) / 10;
        } catch (err) {
            console.log(err);
        }
    }

    multiply(a,b){
                    
        try{
            return parseInt(a) * parseInt(b);
        } 
        catch (err) {
            console.log(err);
        }
    }

    compute(string){
        let expression = string.split('');
        let operators = ['/', '*', '+', '-'];
        let myCalc = new calculator();
        
        for(let character of expression){
            if(operators.includes(character)){
                let positionOfOperator = expression.indexOf(character);
                let computationStart = positionOfOperator - 1;
                let computationEnd = positionOfOperator + 2;
                let sub_expression = expression.slice(computationStart,computationEnd)
                expression.shift()
                console.log(sub_expression.join(''));
            }
        }
    }

}




