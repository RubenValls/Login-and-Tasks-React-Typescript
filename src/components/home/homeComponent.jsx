import React, { useEffect } from 'react';
import FinishedTasksComponent from './finishedTasksComponent';
import { TabView, TabPanel } from 'primereact/tabview';
import DeletedTasksComponent from './deletedTasksComponent';
import PendingTasksComponent from './pendingTasksComponent';
import CreateTasksComponent from './createTasksComponent';

const HomeComponent = () => {
    
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token')
    if(!token){
        window.location.href = '/'
    }
    const data = JSON.parse(window.localStorage.getItem(token)) || []
    console.log(data)
    
    return (
        <div className = 'w-full h-screen'>
            <TabView>
                <TabPanel header="Create a new task">
                    <CreateTasksComponent token = {token} data = {data}/>
                </TabPanel>
                <TabPanel header="Tasks">
                    <PendingTasksComponent token = {token} data = {data}/>
                </TabPanel>
                <TabPanel header="Finished tasks">
                    <FinishedTasksComponent token = {token} data = {data}/>
                </TabPanel>
                <TabPanel header="Deleted tasks">
                    <DeletedTasksComponent token = {token} data = {data}/>
                </TabPanel>
            </TabView>
        </div>
    );
}

export default HomeComponent;
