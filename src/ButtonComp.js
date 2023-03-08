import React from 'react';

function ButtonComp({type,changeType}) {
    return (
        <div>
            <div>{type}</div>
            <div >Tип :</div>
            <button onClick={()=>changeType('water')} >Вода</button>
            <button onClick={()=>changeType('fire')} >Вогонь</button>
            <button onClick={()=>changeType('grass')} >Трава</button>
            <button onClick={()=>changeType('electric')} >Електрика</button>
        </div>
    );
}

export default ButtonComp;