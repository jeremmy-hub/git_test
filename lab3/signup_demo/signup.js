const myForm = document.querySelector('#signupForm');
const newPassword = document.querySelector('#newPassword');
const confirmedPassword = document.querySelector('#confirmPassword');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const passwordHint = document.querySelector('.requirements');
const lowercase_check = document.querySelector('.lowercase_check');
const uppercase_check = document.querySelector('.uppercase_check');
const digit_check = document.querySelector('.digit_check');
const specialchar_check = document.querySelector('.specialchar_check');
const charlength_check = document.querySelector('.charlength_check');
const eye = document.querySelector('#eye');
let passwordHintvisible = false;


//regex groups here
let lowercases = /[a-z]/;
let uppercases = /[A-Z]/;
let digits = /\d/;
let specialcharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?\\/\|]/;

let firstNameIsValid = false;
let lastNameIsValid = false;
let passwordIsVisible = false;

eye.addEventListener('click', (event)=>{
    if (!passwordIsVisible){
        newPassword.type = 'text';
        confirmedPassword.type = 'text';
        passwordIsVisible = true;
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
        return 1;
    }
    newPassword.type = 'password';
    confirmedPassword.type = 'password';
    passwordIsVisible = false;
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
})


myForm.addEventListener('submit', function (event){
    event.preventDefault();
    
    if (event.target.checkValidity) {
        let newPasswordvalue = newPassword.value
        let confirmedPasswordvalue = confirmedPassword.value

        if (validateMatch(newPasswordvalue, confirmedPasswordvalue)) {
            if (validatePasswordPattern(newPassword)) {
                return 1;
            }
            return 0;
        }

        return 0;
    }
    return 0;
})


newPassword.addEventListener('input', function (event){
    passwordHint.style.display = 'block';
    let parseString = event.target.value.split('');
    checkPasswordIntergrity(parseString); 
    eye.style = 'top: 17%;';  
})

newPassword.onfocus = function(){passwordHint.style.opacity = '.9';}

newPassword.addEventListener('blur', function (event){
    passwordHint.style.opacity = '0.3';
    let parseString = event.target.value.split('');
    checkPasswordIntergrity(parseString); 
    eye.style = 'top: 17%;';
})


function checkPasswordIntergrity(password){
    (password.some(x=>x.match(/[a-z]/)))?lowercase_check.style.color='green':lowercase_check.style.color='red';

    (password.some(x=> x.match(uppercases)))?uppercase_check.style.color = 'green':uppercase_check.style.color = 'red';

    (password.some(x=> x.match(digits)))?digit_check.style.color = 'green':digit_check.style.color = 'red';


    (password.some(x=> x.match(specialcharacters)))?specialchar_check.style.color = 'green':specialchar_check.style.color = 'red';

    password.length>=8?charlength_check.style.color='green':charlength_check.style.color='red';

}


function validateMatch(value_1, value_2){
    if(value_1 === value_2){
        return 1;
    }
    return 0;
}


function validatePasswordPattern(candidate){
    const passwordExample = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#\$%\^&\+=!])(?=.*[a-zA-Z0-9@#$%^&+=!]).{8,}$/;
    
    if(candidate.match(passwordExample)){
        return 1;
    }
    return 0;
}


function validateUsernameIntergity(username){
    let usernameAllowedPattern = /^[a-zA-Z]{2,20}$/;
    if (username.match(usernameAllowedPattern)){
        return 1;
    }
    return 0;
}