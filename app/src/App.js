import './App.scss';
import { useState, useEffect } from 'react';
import CodeView from './CodeView';

/*
function createCodeView(userInput) {
    // let lines = userInput.split("\n");
    return ( 
        <div className="test">Test</div>
    );
}*/

function App() {
    const [userInput, setUserInput] = useState(""); // State: { 'userInput' : ... }

    /*
    useEffect( () => {
    }, [userInput]);
    */

    return (
        <div className="App">
            <div className="sidebar"></div>
            <div className="contentGrid">
                <div className="textareaContainer">
                    <div className="codeView">
                        {<CodeView userSays={userInput} />}
                        
                        {/*
                        <div className="row">
                            <span className="lineContent"> This is a sample line </span>
                        </div>
                        */}

                    </div>
                    <textarea className="hiddenInput" onChange={(e) => setUserInput(e.target.value)}></textarea>
                </div>
                <div className="previewContainer"></div>
            </div>
        </div>
    );
}

export default App;