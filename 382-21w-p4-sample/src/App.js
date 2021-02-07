import React, { useState } from 'react';
import Listing from './Listing.js';
import DataEntry from './DataEntry.js';
import Graphing from './Graphing.js';
import './styles.css';

export default function App() {
  const [grades, setGrades] = useState([]);
  const addGrade = (props) => {
    console.log('** addGrade **');
    const { name, grade, grad } = props; // Deconstruction
    setGrades([{ name, grade, grad}, ...grades]); // If prop and variable have same name, just use prop name
  };


  console.log(grades);

  const handleClear = () => {
    setGrades([]);
  }

  const handleDelete = (id) => {
    console.log(id);
    const newGrades = [...grades];
    console.log(newGrades);
    newGrades.splice(id, 1);
    console.log(newGrades);
    setGrades(newGrades);
  }

  const handleEdit = (e) => (id) => {
    const newGrades = [...grades];
    console.log(newGrades);
    console.log(id);
    newGrades[id]['name'] = e.target.value;
    setGrades(newGrades);
  }

  return (
    <div className="App">
      <h1>Project 4 Sample</h1>
      <div>
        {/* <button onClick={addGrade}>Add Grade</button> */}
        <div className="top">
          <Listing 
            grades={grades}
            handleClear={handleClear}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <DataEntry 
            saveGrade={addGrade}
          />
        </div> 
        <Graphing />
      </div>
    </div>
  );
}