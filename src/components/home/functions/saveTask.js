export function saveTask(name, description, priority, props, taskMsg){
    if (name && description && priority){
        if(props.data.find((task) => task.task === name)){
            taskMsg.current.show([
                { severity: 'error', summary: '', detail: 'This task already exists'}
            ]);
        }else{
            taskMsg.current.show([
                {sticky: true, severity: 'success', summary: '', detail: `${name} created`}
                ]);
            const task = {
                "task": name,
                "description": description,
                "priority": priority,
                "situation" : "task"
            }
            props.data.push(task);
        }
    }else{
        taskMsg.current.show([
            { severity: 'error', summary: '', detail: 'Please, fill all the info'}
        ]);
    }
}