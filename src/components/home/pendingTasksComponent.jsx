import React, { useState, useEffect, useRef} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { finishTask } from './functions/finishTask';
import { deleteTask } from './functions/deleteTask';
import { Messages } from 'primereact/messages';

const PendingTasksComponent = (props) => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);
    const taskMsg = useRef(null);

    useEffect(() => {
        const filteredTasks = props.data.filter( task => task.situation === "task");
        setTasks(filteredTasks);
    }, [props.data]);
    
    function finish(){
        taskMsg.current.clear()
        finishTask(selectedTask, props, taskMsg)
        const filteredTasks = props.data.filter( task => task.situation === "task");
        setTasks(filteredTasks);
    }

    function deleted(){
        taskMsg.current.clear()
        deleteTask(selectedTask, props, taskMsg)
        const filteredTasks = props.data.filter( task => task.situation === "task");
        setTasks(filteredTasks);
    }

    return (
        <div className = 'flex w-full h-auto justify-content-center align-content-center align-items-center'>
            <div className='w-11 h-auto m-auto'>
                <div className="card">
                    <DataTable value={tasks} selectionMode="single" selection={selectedTask} onSelectionChange={(e) => setSelectedTask(e.value)} sortField="priority" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="task" header="Name" sortable style={{ width: '20%' }}></Column>
                        <Column field="description" header="Description" sortable style={{ width: '20%' }}></Column>
                        <Column field="priority" header="Priority" sortable style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
                <Button label="Finish task" severity="success" icon="pi pi-check" size="sm" onClick={finish} className='mt-4 m-1' text raised/>
                <Button label="Delete task" severity="danger" icon="pi pi-times" size="sm" onClick={deleted} className='mt-4 m-1' text raised/>
                <Messages ref={taskMsg} className = "mt-2"/>
            </div>
        </div>
    );
}

export default PendingTasksComponent;
