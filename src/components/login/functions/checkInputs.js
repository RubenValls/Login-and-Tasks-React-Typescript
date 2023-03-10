export function validateForm(email, pass, msg){
    const validateEmailRegex = /^\S+@\S+\.\S+$/

    if(validateEmailRegex.test(email)){
        window.alert('EMAIL CORRECT')
        msg.current.clear();
    }else{
        msg.current.show([
            { severity: 'error', summary: '', detail: 'Login info not valid', sticky: true, closable: false }
        ]);
    }
}