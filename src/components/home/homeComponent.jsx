import React from 'react';
import FinishedTasksComponent from './finishedTasksComponent';
import { TabView, TabPanel } from 'primereact/tabview';
import DeletedTasksComponent from './deletedTasksComponent';
import PendingTasksComponent from './pendingTasksComponent';

const HomeComponent = () => {
    
    const data = [
        {
            "task": "taskname",
            "description": "description",
            "priority": 1,
        },
        {
            "task": "taskname2",
            "description": "description2",
            "priority": 2,
        }
    ]
    
    return (
        <div className = 'w-full h-screen'>
            <TabView>
                <TabPanel header="Create a new task">
                    CREATE TASK FORM
                </TabPanel>
                <TabPanel header="Tasks">
                    <PendingTasksComponent data = {data}/>
                </TabPanel>
                <TabPanel header="Finished tasks">
                    <FinishedTasksComponent data = {data}/>
                </TabPanel>
                <TabPanel header="Deleted tasks">
                    <DeletedTasksComponent data = {data}/>
                </TabPanel>
            </TabView>
        </div>
    );
}

export default HomeComponent;
