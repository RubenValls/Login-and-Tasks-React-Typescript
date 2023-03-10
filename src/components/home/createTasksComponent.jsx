import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';
import { saveTask } from './functions/saveTask';

const CreateTasksComponent = (props) => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const taskMsg = useRef(null);

    function checkTask(){
        taskMsg.current.clear()
        saveTask(name, description, priority, props, taskMsg)
    }
    
    return (
        <div className="card flex justify-content-center max-w-screen">
            <div className="flex flex-column gap-2 max-w-screen">
                <label htmlFor="username">Task Name:</label>
                <InputText id="username" aria-describedby="username-help" value={name} onChange={(e) => setName(e.target.value)} />
                <InputTextarea autoResize placeholder="Task Description" value={description} rows={5} cols={50} onChange={(e) => setDescription(e.target.value)} />
                <label className='mt-2'>Priority Level:</label>
                <div className="flex flex-wrap gap-3">
                    <div className="flex align-items-center m-auto">
                        <RadioButton inputId="max" name="priority" value="1" onChange={(e) => setPriority(e.value)} checked={priority === '1'}/>
                        <label htmlFor="max" className="ml-2">1: Max</label>
                    </div>
                    <div className="flex align-items-center m-auto">
                        <RadioButton inputId="medium" name="priority" value="2" onChange={(e) => setPriority(e.value)} checked={priority === '2'}/>
                        <label htmlFor="medium" className="ml-2">2: Medium</label>
                    </div>
                    <div className="flex align-items-center m-auto">
                        <RadioButton inputId="low" name="priority" value="3" onChange={(e) => setPriority(e.value)} checked={priority === '3'}/>
                        <label htmlFor="low" className="ml-2">3: Low</label>
                    </div>
                </div>
                <Button label="Create new task" icon="pi pi-check" iconPos="right" className='m-auto mt-2' size="sm" rounded outlined onClick={checkTask}></Button>
                <Messages ref={taskMsg} className = "mt-2"/>
            </div>
        </div>
    );
}

export default CreateTasksComponent;
