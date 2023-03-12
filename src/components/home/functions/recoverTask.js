export function recoverTask(selectedTask, props, taskMsg){
    props.data.forEach( task => {
        if (task.task === selectedTask.task){
            task.situation = "task"
            taskMsg.current.show([
                {severity: 'success', summary: '', detail: 'Task restored'}
                ]);
        }
    })
    window.localStorage.setItem(props.token, JSON.stringify(props.data));
}