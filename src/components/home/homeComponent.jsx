import React from 'react';
import FinishedTasksComponent from './finishedTasksComponent';
import { TabView, TabPanel } from 'primereact/tabview';
import DeletedTasksComponent from './deletedTasksComponent';
import PendingTasksComponent from './pendingTasksComponent';
import CreateTasksComponent from './createTasksComponent';

const HomeComponent = () => {
    
    const data = [
        {
            "task": "taskname",
            "description": "description",
            "priority": 1,
            "situation" : "task"
        },
        {
            "task": "taskname2",
            "description": "description2",
            "priority": 2,
            "situation" : "finished"
        }
    ]
    
    return (
        <div className = 'w-full h-screen'>
            <TabView>
                <TabPanel header="Create a new task">
                    <CreateTasksComponent data = {data}/>
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
