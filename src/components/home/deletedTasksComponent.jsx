import React, { useState, useEffect, useRef} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Messages } from 'primereact/messages';
import { Button } from 'primereact/button';
import { recoverTask } from './functions/recoverTask';

const DeletedTasksComponent = (props) => {
    const [deletedTasks, setDeletedTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);
    const taskMsg = useRef(null);

    useEffect(() => {
        const filteredTasks = props.data.filter( task => task.situation === "deleted");
        setDeletedTasks(filteredTasks);
    }, [props.data]);
    
    function restore(){
        recoverTask(selectedTask, props, taskMsg)
        const filteredTasks = props.data.filter( task => task.situation === "deleted");
        setDeletedTasks(filteredTasks);
    }

    return (
        <div className = 'flex w-full h-auto justify-content-center align-content-center align-items-center'>
            <div className='w-11 h-auto m-auto'>
                <div className="card">
                    <DataTable value={deletedTasks} selectionMode="single" selection={selectedTask} onSelectionChange={(e) => setSelectedTask(e.value)} sortField="priority" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="task" header="Name" sortable style={{ width: '20%' }}></Column>
                        <Column field="description" header="Description" sortable style={{ width: '20%' }}></Column>
                        <Column field="priority" header="Priority" sortable style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
                <Button label="Restore task" severity="secondary" icon="pi pi-replay" size="sm" onClick={restore} className='mt-4 m-1' text raised/>
                <Messages ref={taskMsg} className = "mt-2"/>
            </div>
        </div>
    );
}

export default DeletedTasksComponent;
