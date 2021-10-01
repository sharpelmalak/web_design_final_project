var topBtn = document.querySelector('#topBtn')

window.addEventListener('scroll' , function(){

    (document.documentElement.scrollTop > 300) ?  topBtn.style.display = 'block' : topBtn.style.display = 'none';

})





var myForm = document.getElementById('myForm')
var divForm= document.getElementById('contactForm')

myForm.addEventListener('input' , function(e){
    
    switch(e.target.id){
        case 'name' : 
             
            checkName(e.target)
        break
        case 'email' :
        checkEmail(e.target)
        break
        case 'password':
        checkPassword(e.target)
        break

    }

})



myForm.addEventListener('submit',function(e){
    e.preventDefault()
    checkName(e.target.name) 
    checkEmail(e.target.email)
    checkPassword(e.target.password)
    if(checkName(e.target.name) && checkEmail(e.target.email)&&checkPassword(e.target.password)){
           e.target.btn.classList.add('btn-success','bg-dark')
           removeError(e.target.btn)
           showM(e.target.btn,'Your message is sent ')
    }
  else{  divForm.classList.add('border', 'border-1' ,'border-warning','p-2')
    showError(e.target.btn ,  'one or More input is invalid')}

})


function checkName(inp){
    
    var inputValue = inp.value.trim()
    var regex = /^[a-zA-Z ]{3,30}$/;
    
    if(!regex.test(inputValue)) showError(inp , 'Nam cannot be less than 3 letters ' )
    else { 
        removeError(inp) 
        return true
    
    }
}


function checkEmail(inp){
    
    var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(reg.test(inp.value)){
         removeError(inp)
        return true }
    else showError(inp , 'invalid email address')

}

function checkPassword(inp){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*)(?=.{8,})");
   if(strongRegex.test(inp.value))
    { 
        removeError(inp) 
        return true
    }
    else showError(inp , 'password myst have 1 lower character and 1 upper character  at least 8 character')

}


function showError(element , msg){
    element.nextElementSibling.innerText = msg
    element.nextElementSibling.classList.add('text-danger')
    
}
function removeError(element){
    element.nextElementSibling.innerText = ''
}

function showM(element , msg){
    element.nextElementSibling.classList.add('text-primary','fs-4','pt-3')
    element.nextElementSibling.innerText = msg
    
    
}


