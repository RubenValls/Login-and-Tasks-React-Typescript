import axios from "axios";

export function validateForm(email, pass, msg){
    const validateEmailRegex = /^\S+@\S+\.\S+$/

    if(validateEmailRegex.test(email)){
        msg.current.clear()
        msg.current.show([
            {sticky: true, severity: 'success', summary: '', detail: 'Correct Log in', closable: false}
        ]);
        const loginInfo = {
            "email": email,
            "password": pass
        }
        axiosRequest(loginInfo)
    }else{
        msg.current.show([
            { severity: 'error', summary: '', detail: 'Test with: eve.holt@reqres.in : cityslicka', sticky: true, closable: false }
        ]);
    }
}

function axiosRequest(loginInfo){

    const apiURL = 'https://reqres.in/api/login'

    axios.post(apiURL, loginInfo)
    .then(function (response) {
        console.log(response.data.token);
    })
    .catch(function (error) {
        console.log(error);
    });
}