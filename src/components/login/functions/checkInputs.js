export function checkInputs(email, pass){
    const validateEmailRegex = /^\S+@\S+\.\S+$/

    if(validateEmailRegex.test(email)){
        window.alert('EMAIL CORRECT')
    }else{
        window.alert('EMAIL INCORRECT')
    }
}