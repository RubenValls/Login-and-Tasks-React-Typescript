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
                { severity: 'error', summary: '', detail: 'Test: eve.holt@reqres.in : cityslicka', sticky: true, closable: false }
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
            msg.current.show([
                {sticky: true, severity: 'success', summary: '', detail: 'Correct Log in', closable: false}
                ]);
        }
        console.log(response);
    })
    .catch(function (error) {
        msg.current.show([
            { severity: 'error', summary: '', detail: 'Test with: eve.holt@reqres.in : cityslicka', sticky: true, closable: false }
        ]);
    });
}