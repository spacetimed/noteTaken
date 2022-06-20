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

function handleKey(event, setCodeChange, codeInput, codeInputElement, setCaretPos) {
    const key = event.keyCode;
    if(key == 9) { // Tab key
        event.preventDefault();
        const begin = codeInputElement.current.selectionStart;
        const newCode = codeInput.substring(0, begin) + '    ' + codeInput.substring(begin, codeInput.length);
        setCodeChange(newCode);
        setCaretPos(begin + 4);
        // caretPos(0);
    }
}

function CodeEditor({setHtmlContent, setRawContent}) {

    const codeInputElement = useRef(null);
    const [codeInput, setCodeChange] = useState(""); // State: { 'codeInput' : ... }
    const [caretPos, setCaretPos] = useState(-1);

    useEffect(() => {
        markdownToHtml(codeInput)
        .then( (htmlContent) => {
            setHtmlContent(htmlContent);
            setRawContent(codeInput);
        });
        if(caretPos !== -1) {
            codeInputElement.current.selectionEnd = caretPos;
            codeInputElement.current.selectionEnd = caretPos;
            setCaretPos(-1);
        }
    }, [codeInput]);

    // useEffect( () => {
    // }, [caretPos]);

    return (
        <div className="masked-codeContainer">
            <div className="full-codeContainer">
                <pre className="codeView">
                    {parse(codeInput)}
                </pre>
                <textarea autoFocus aria-hidden="true" spellCheck="false" 
                    ref={codeInputElement}
                    value={codeInput} 
                    className="hiddenInput" 
                    onChange={(e) => setCodeChange(e.target.value)} 
                    onKeyDown={(e) => handleKey(e, setCodeChange, codeInput, codeInputElement, setCaretPos)} 
                />
            </div>
        </div>
    )
}

export default CodeEditor;