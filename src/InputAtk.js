import React from 'react';

function InputAtk({changeValue}) {
    return (
        <div>
            <input onChange={(e)=>changeValue(e.target.value)} type={"number"}/>
        </div>
    );
}

export default InputAtk;