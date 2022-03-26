import React from 'react';
import Button from './Button';

function App() {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Hello, World!!!</h1>
            <Button title={"Play Store"}/>
            <Button title={"App Store"}/>
            <Button />
        </div>
    );
}

export default App;