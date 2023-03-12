export function finishTask(selectedTask, props, taskMsg){
    props.data.forEach( task => {
        if (task.task === selectedTask.task){
            task.situation = "finished"
            taskMsg.current.show([
                {severity: 'success', summary: '', detail: 'Task finished correctly'}
            ]);
        }
    })
    window.localStorage.setItem(props.token, JSON.stringify(props.data));
}