document.addEventListener("DOMContentLoaded", () =>{

    let passwordValue = 0;

    // deactive the button
    const button = document.querySelector('#button')
    button.disabled = true
    // alert('d')
    const email = document.querySelector('#email')

    email.addEventListener('keyup', function(e){

      // if the user tape somehing on email input the button should actived
      if(e.target.value.length > 0){
        button.disabled = false
      }else{
        button.disabled = true
      }
    })

    const password = document.querySelector('#password')

    password.addEventListener('keyup', e=>{
      passwordValue = e.target.value.length
    })

    button.addEventListener('click', e=>{
        // check if password valid
      if(passwordValue >= 8){
        return true
      }else{
        e.preventDefault()
        alert('your password should have 8 caractere')
      }
    })
  })