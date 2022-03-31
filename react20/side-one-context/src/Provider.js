import React, {useState} from 'react';

import packageContext from './Context';



const Provider = (props) => {
    
    const [mission, setMission] = useState({
        mname: "Go to Russia",
        agent: "007",
        accept: "Not accepted"
    });
    
    return (
        <packageContext.Provider
        value={{
            data: mission,
            isMissionAccepted: () => {
                setMission({...mission, accept: "ACCEPTED"})
            }
        }}
        >
            {props.children}
        </packageContext.Provider>
    );
}

export default Provider;