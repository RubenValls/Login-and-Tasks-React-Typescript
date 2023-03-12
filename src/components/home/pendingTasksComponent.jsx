import React, { useState, useEffect} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const PendingTasksComponent = (props) => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState([]);

    useEffect(() => {
        const filteredTasks = props.data.filter( task => task.situation === "task");
        setTasks(filteredTasks);
    }, [props.data, selectedTask]);
    
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
                <Button label="Finish task" severity="success" icon="pi pi-check" size="sm" className='mt-2 m-1'/>
                <Button label="Delete task" severity="danger" icon="pi pi-times" size="sm" className='mt-2 m-1'/>
            </div>
        </div>
    );
}

export default PendingTasksComponent;
