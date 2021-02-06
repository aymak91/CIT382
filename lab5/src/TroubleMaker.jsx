import React, {useState} from 'react';

function TroubleMaker({trouble=0, incrementTrouble = f => f}) {

    // const [trouble, setTrouble] = useState(0);

    const handleTrouble = () => {
        incrementTrouble();
    }

    return (
        <div>
            <button onClick={handleTrouble}>Make Trouble</button>
        </div>
    )
}

export default TroubleMaker;