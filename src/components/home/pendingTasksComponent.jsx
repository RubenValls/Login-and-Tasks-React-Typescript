import React, { useState, useEffect} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const PendingTasksComponent = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.data);
    }, []);
    
    return (
        <div className = 'flex w-full h-auto justify-content-center align-content-center align-items-center'>
            <div className='w-11 h-auto m-auto'>
                <div className="card">
                    <DataTable value={products} sortField="priority" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="task" header="Name" sortable style={{ width: '20%' }}></Column>
                        <Column field="description" header="Description" sortable style={{ width: '20%' }}></Column>
                        <Column field="priority" header="Priority" sortable style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
}

export default PendingTasksComponent;
