import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

const LoginPageComponent = () => {
    
    const [pass, setPass] = useState('');

    function testPass(){
        window.alert(`Your password is: ${pass}`)
    }
    
    return (
        <Card>
            <div className="p-inputgroup m-2">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" id='username'/>
            </div>
            <div className="p-inputgroup m-2">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                </span>
                <Password value={pass} onChange={(e) => setPass(e.target.value)} id='password'/>
            </div>
            <Button label="Submit" icon="pi pi-check" iconPos="right" className='m-2' onClick={testPass}/>
        </Card>
    );
}

export default LoginPageComponent;
