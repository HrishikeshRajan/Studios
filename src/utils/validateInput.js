export const validate = (email, passowrd, fullname = null) => {

  
    if((fullname !== null && fullname.length <1)) {
        return "fullname field can't be empty"
    }
    if((email.length < 1)) {
        return "Email field can't be empty"
    }
    

    if(passowrd.length < 1){
        return "Password field can't be empty"
    }
}