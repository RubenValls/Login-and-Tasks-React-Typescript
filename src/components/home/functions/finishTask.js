export function finishTask(selectedTask, props){
    props.data.forEach( task => {
        if (task.task === selectedTask.task){
            task.situation = "finished"
        }
    })
}