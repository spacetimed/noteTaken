import './App.scss';
import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';

/*
function createCodeView(userInput) {
    // let lines = userInput.split("\n");
    return ( 
        <div className="test">Test</div>
    );
}*/

function App() {

    /*
    useEffect( () => {
    }, [userInput]);
    */

    return (
        <div className="App">
            <div className="sidebar"></div>
            <div className="contentGrid">
                <CodeEditor />
                <div className="previewContainer"></div>
            </div>
        </div>
    );
}

export default App;