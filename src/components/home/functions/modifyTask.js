export function modifyTask(name, description, priority, props, taskMsg){
    props.tasks.forEach( task => {
        if( task.task === name){
            task.task = name
            task.description = description
            task.priority = priority
            taskMsg.current.show([
                {severity: 'success', summary: '', detail: 'Task modified'}
            ]);
        }else{
            taskMsg.current.show([
                { severity: 'error', summary: '', detail: 'Task does not exists'}
            ]);
        }
    })
    window.localStorage.setItem(props.token, JSON.stringify(props.tasks));
}