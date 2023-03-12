export function deleteTask(selectedTask, props, taskMsg){
    props.data.forEach( task => {
        if (task.task === selectedTask.task){
            task.situation = "deleted"
            taskMsg.current.show([
                { severity: 'error', summary: '', detail: 'Task deleted correctly'}
            ]);
        }
    })
}