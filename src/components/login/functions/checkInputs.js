import axios from "axios";

let errorShow = false;

export function validateForm(email, pass, msg){
    const validateEmailRegex = /^\S+@\S+\.\S+$/

    if(validateEmailRegex.test(email)){
        msg.current.clear()

        const loginInfo = {
            "email": email,
            "password": pass
        }
        axiosRequest(loginInfo, msg)
    }else{
        if(!errorShow){
            msg.current.show([
                { severity: 'error', summary: '', detail: 'Test with eve.holt@reqres.in', sticky: true, closable: false }
            ]);
            errorShow = true;
        }
    }
}

function axiosRequest(loginInfo, msg){

    const apiURL = 'https://reqres.in/api/login'

    axios.post(apiURL, loginInfo)
    .then(function (response) {
        if(response.status === 200){
            console.log(response);
            msg.current.show([
                {sticky: true, severity: 'success', summary: '', detail: 'Correct Log in', closable: false}
                ]);
            window.setTimeout(redirect, 800)
        }
    })
    .catch(function (error) {
        msg.current.show([
            { severity: 'error', summary: '', detail: 'Test with eve.holt@reqres.in', sticky: true, closable: false }
        ]);
    });
}

function redirect(){
    window.location.href = '/home'
}