export function deleteTask(selectedTask, props){
    props.data.forEach( task => {
        if (task.task === selectedTask.task){
            task.situation = "deleted"
        }
    })
}