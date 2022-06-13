import './App.scss';
import { useState, useEffect } from 'react';

function handleUserInput(userInput) {
    return;
}

function App() {
    const [userInput, setUserInput] = useState(""); // State: { 'userInput' : ... }

    useEffect( () => {
        handleUserInput(userInput);
    }, [userInput]);

    return (
        <div className="App">
            <div className="sidebar"></div>
            <div className="contentGrid">
                <div className="textareaContainer">
                    <div className="codeView">
                        {/*
                        <div className="row">
                            <span className="lineContent"> This is a sample line </span>
                        </div>

                        <div className="row">
                            <span className="lineContent"> This is a sample line </span>
                        </div>

                        <div className="row">
                            <span className="lineContent"> This is a sample line </span>
                        </div>

                        <div className="row">
                            <span className="lineContent"> This is a sample line </span>
                        </div>

                        <div className="row">
                            <span className="lineContent"> This is a sample line ▌</span>
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