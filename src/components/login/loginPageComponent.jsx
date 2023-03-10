import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { validateForm } from './functions/checkInputs';
import { Messages } from 'primereact/messages';
import { Image } from 'primereact/image';

const LoginPageComponent = () => {
    
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const msg = useRef(null);

    function testInfo(){
        validateForm(email, pass, msg)
    }
    
    return (
            <Card className='w-24rem m-auto'>
                <Image src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="login-img" width='100rem'/>
                <div className="p-inputgroup m-2">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-at"></i>
                    </span>
                    <InputText placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' required/>
                </div>
                <div className="p-inputgroup m-2">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-lock"></i>
                    </span>
                    <Password value={pass} onChange={(e) => setPass(e.target.value)} id='password' required/>
                </div>
                <Messages ref={msg}/>
                <Button label="Log in" icon="pi pi-check" iconPos="right" className='m-2' onClick={testInfo} severity="help" size="sm" rounded outlined/>
            </Card>
    );
}

export default LoginPageComponent;
