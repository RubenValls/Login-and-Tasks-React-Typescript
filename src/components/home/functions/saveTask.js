export function saveTask(name, description, priority, props, taskMsg){
    if (name && description && priority){
        if(props.data.find((task) => task.task === name)){
            taskMsg.current.show([
                { severity: 'error', summary: '', detail: 'This task already exists'}
            ]);
        }else{
            taskMsg.current.show([
                {severity: 'success', summary: '', detail: `New task created`}
                ]);
            const task = {
                "task": name,
                "description": description,
                "priority": priority,
                "situation" : "task",
            }
            props.data.push(task);
            window.localStorage.setItem(props.token, JSON.stringify(props.data));
        }
    }else{
        taskMsg.current.show([
            { severity: 'error', summary: '', detail: 'Please, fill all the info'}
        ]);
    }
}