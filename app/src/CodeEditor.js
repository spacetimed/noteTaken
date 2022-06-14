import { useState, useEffect } from 'react';

function CodeEditor() {

    const [codeInput, setCodeChange] = useState(""); // State: { 'codeInput' : ... }

    useEffect(() => {
        // do something
    }, [codeInput]);

    console.log('codeInput->', codeInput);

    return (
        <div className="masked-codeContainer">
            <div className="full-codeContainer">
                <pre className="codeView">
                    {codeInput}
                    <br></br>
                </pre>
                <textarea className="hiddenInput" onChange={(e) => setCodeChange(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default CodeEditor;