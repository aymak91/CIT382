import React, { useState } from 'react';

export default function DataEntry({ saveGrade = (f) => f }) {

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState(0);
  const [grad, setGrad] = useState(false);
  const [error, setError] = useState('');

  const handleSaveClick = () => {
    /*

      On Save:
      1. Validate data, show errors, no further action
      2. Send data to App
      3. Clear/reset form fields

    */
    // 1. Validate data, show errors, no further action
    let isError = false;

    // Name: must have length > 0 after trim
    isError = name.trim().length === 0;

    // Grade: try to cast to number, must be numeric, >= 0
    // One-liner, but makes showing which error difficult
    // isError = !isError ? isNaN(grade): isError;

    // console.log('number?', typeof grade);  // Confirm input box returns string
    const gradeTest = Number(String(grade).trim());

    if (!isError) {
      // TODO: Finish grade validation, allows non-numic
      isError = isNaN(gradeTest) && gradeTest >= 0; // Conditionals short-circuit
    } else {
        setError('Invalid Entry')
    }

    // Grad: no validation necessary

    // Only finish steps #2 and #3 if no error
    console.log('Error:', isError);
    if (!isError) {
      // 2. Send data to App
      saveGrade({ name, grade: gradeTest, grad });

      // 3. Clear/reset form fields
      setName('');
      setGrade(0);
      setGrad(false);
      setError('');
    }
  };

  console.log('State:', name, grade, grad);

//   const useInputValue = initialValue => {
//       const [value, setValue] = setState(initialValue);

//       return {
//           value,
//           onChange: e => setValue(e.target.value);
//       }
//   }

//   const name = useInputValue("");

  return (
    <div className="dataEntry">
      <h2>Data Entry</h2>
      <div>
        <label htmlFor="NameInput">Name: </label>
        <input
          id="NameInput"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="GradeInput">Grade: </label>
        <input
          id="GradeInput"
          value={grade}
          onChange={(evt) => setGrade(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="GradCheckbox">Grad: </label>
        <input
          id="GradCheckbox"
          type="checkbox"
          checked={grad}
          onChange={(evt) => setGrad(evt.target.checked)}
        />
      </div>
      <div>
        <button onClick={handleSaveClick}>Save</button>
      </div>
      <div className='errors'>{error}</div>
      <hr />
    </div>
  );
}