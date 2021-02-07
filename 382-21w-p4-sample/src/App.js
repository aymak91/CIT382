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
    setGrades([{ name, grade, grad }]); // If prop and variable have same name, just use prop name
  };
  console.log(grades);
  return (
    <div className="App">
      <h1>Project 4 Sample</h1>
      <div>
        <button onClick={addGrade}>Add Grade</button>
        <div className="top">
          <Listing />
          <DataEntry saveGrade={addGrade} />
        </div> 
        <Graphing />
      </div>
    </div>
  );
}