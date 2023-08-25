const password = document.getElementById('password');
const strength = document.querySelector('.password__strength');
const btn = document.querySelector('.btn');
password.addEventListener('input', () =>{
const myPassword = password.value;
if(myPassword.length <8){
    strength.textContent = "Password should be at least 8 character";
    strength.style.color ="red";
    strength.style.textTransform = "none";
}
else if(myPassword.length == 8){
    strength.textContent = "weak";
    strength.style.color ="yellow";
}
else if(myPassword.length >= 9 && myPassword.length <= 10){
    strength.textContent = "Medium";
    strength.style.color ="blue";
}
else{
    strength.textContent = "Strong";
    strength.style.color ="#6cde36";
}

});
btn.addEventListener('click',()=>{
    const passwordType = password.getAttribute('type');
    const passwordlength = password.value.length;
    if(passwordlength === 0){
        alert('Please enter your password');
    }
    else{
        if(passwordType === 'password'){
            password.setAttribute('type','text')
        }else{
            password.setAttribute('type','password')
        }
    }
});