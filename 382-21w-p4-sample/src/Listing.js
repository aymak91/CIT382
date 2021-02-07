import React, { useState } from 'react';
import DataEntry from './DataEntry.js';

export default function Listing(props) {
    
    const [entryEdit, setEntryEdit] = useState(null);
    const [editingText, setEditingText] = useState('');

    console.log(props);

    function editEntry(id) {
        // const updatedEntry = [...props.grades].map((entry, index) => {
        //     if(index === id) {
        //         props.grades['name'] = editingText;
        //     }
        //     return entry;
        // }
        // set
        console.log(1)
    }

    return (
    <div className="dataList">
      <h2 className="list">List</h2>
        <ul className="table">
            <ul className="entry">
                <li className="listElement">ID</li>
                <li className="listElement">Name</li>
                <li className="listElement">Grade</li>
                <li className="listElement">Grad</li>
                <li className="listElement"></li>
            </ul>
            {props.grades.map((entry, index) => (
                <ul className="entry">                
                    <li className="listElement" key={index}>{index}</li>
                    {entryEdit === index ? 
                        (<input 
                        type="text" 
                        onChange={(e) => setEditingText(e.target.value)} 
                        value={editingText} className="listElement highlight"
                        onSubmit={() => editEntry(index)}></input>) : 
                        (<li className="listElement" >{entry.name}</li>)}
                    
                    
                    <li className="listElement">{entry.grade}</li>
                    <li className="listElement">{entry.grad.toString()}</li>
                    <li className="listElement">
                        <button onClick={() => props.handleDelete(index)}>Delete</button>
                        <button onClick={() => setEntryEdit(entryEdit === null ? index : null)}>{entryEdit === null ? 'Edit' : 'Submit'}</button>
                    </li>
                </ul>
            ))}
        </ul>
        <button onClick={props.handleClear}>Clear</button>
    </div>
  );
}