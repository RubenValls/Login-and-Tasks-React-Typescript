import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';

const CreateTasksComponent = () => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    function checkTask(){
        if (name && description && priority){
            window.alert('TASK CORRECT')
        }else{
            window.alert('TASK INCORRECT')
        }
    }
    
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Task Name:</label>
                <InputText id="username" aria-describedby="username-help" value={name} onChange={(e) => setName(e.target.value)} />
                <InputTextarea autoResize placeholder="Task Description" value={description} rows={5} cols={50} onChange={(e) => setDescription(e.target.value)} />
                <div className="flex flex-wrap gap-3">
                    <div className="flex align-items-center m-auto">
                        <RadioButton inputId="max" name="priority" value="1" onChange={(e) => setPriority(e.value)} checked={priority === '1'}/>
                        <label htmlFor="max" className="ml-2">1: Max prior</label>
                    </div>
                    <div className="flex align-items-center m-auto">
                        <RadioButton inputId="medium" name="priority" value="2" onChange={(e) => setPriority(e.value)} checked={priority === '2'}/>
                        <label htmlFor="medium" className="ml-2">2: Medium</label>
                    </div>
                    <div className="flex align-items-center m-auto">
                        <RadioButton inputId="low" name="priority" value="3" onChange={(e) => setPriority(e.value)} checked={priority === '3'}/>
                        <label htmlFor="low" className="ml-2">3: Low prior</label>
                    </div>
                </div>
                <Button label="Create new task" icon="pi pi-check" iconPos="right" className='m-auto mt-2' size="sm" rounded outlined onClick={checkTask}></Button>
            </div>
        </div>
    );
}

export default CreateTasksComponent;
