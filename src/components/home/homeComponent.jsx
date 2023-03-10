import React from 'react';
import FinishedTasksComponent from './finishedTasksComponent';
import { TabView, TabPanel } from 'primereact/tabview';
import DeletedTasksComponent from './deletedTasksComponent';
import PendingTasksComponent from './pendingTasksComponent';

const HomeComponent = () => {
    return (
        <div className = 'w-full h-screen'>
            <TabView>
                <TabPanel header="Create a new task">
                    CREATE TASK FORM
                </TabPanel>
                <TabPanel header="Pending tasks">
                    <PendingTasksComponent/>
                </TabPanel>
                <TabPanel header="Finished tasks">
                    <FinishedTasksComponent/>
                </TabPanel>
                <TabPanel header="Deleted tasks">
                    <DeletedTasksComponent/>
                </TabPanel>
            </TabView>
        </div>
    );
}

export default HomeComponent;
