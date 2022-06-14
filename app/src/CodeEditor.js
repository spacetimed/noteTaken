import { useState, useEffect, useRef } from 'react';
import { remark } from 'remark'
import html from 'remark-html'

async function markdownToHtml(markdown) {
    const result = await remark()
        .use(html)
        .process(markdown)
    return result.toString()
}

function parse(markdownText) {
    // console.log('markdownText->', markdownText)
    let lines = markdownText.split('\n');
    let returnStr = [];
    lines.forEach( (line, index) => {
        let tokenClass = "default";
        const words = line.split(" ");
        const tokenLead = words[0];

        const tokenClassMap = {
            "#" : "h1",
            "##" : "h2",
            "###" : "h3",
            "####" : "h4",
            "#####" : "h5",
            "######" : "h6",
        }

        if(tokenLead in tokenClassMap)
            tokenClass = tokenClassMap[tokenLead];

        words.forEach( word => {
            // to-do: Count occurrences of **, if even occurence, replace every other with open and close strong
            // bold/italic highlighting
        });

        returnStr.push(
            <div key={index} className="line">
                <span key={index + "_lineNum"} className="lineNumber">{index+1}</span>
                <span key={index} className={tokenClass}>
                    {line}
                </span>
            </div>
        )
    });
    return returnStr;
}

function handleKey(event, setCodeChange, codeInput) {
    const key = event.keyCode;
    if(key == 9) { // Tab key
        event.preventDefault();
        setCodeChange(codeInput + "    ");
    }
}

function CodeEditor({setHtmlContent}) {

    const textInput = useRef(null);
    const [codeInput, setCodeChange] = useState(""); // State: { 'codeInput' : ... }

    useEffect(() => {
        markdownToHtml(codeInput)
        .then( (htmlContent) => {
            setHtmlContent(htmlContent);
        });
    }, [codeInput]);

    return (
        <div className="masked-codeContainer">
            <div className="full-codeContainer">
                <pre className="codeView">
                    {parse(codeInput)}
                </pre>
                <textarea autoFocus aria-hidden="true" spellCheck="false" 
                    value={codeInput} 
                    className="hiddenInput" 
                    onChange={(e) => setCodeChange(e.target.value)} 
                    onKeyDown={(e) => handleKey(e, setCodeChange, codeInput)} 
                />
            </div>
        </div>
    )
}

export default CodeEditor;