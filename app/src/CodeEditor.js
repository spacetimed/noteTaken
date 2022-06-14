import { useState, useEffect } from 'react';
import { remark } from 'remark'
import html from 'remark-html'

async function markdownToHtml(markdown) {
    const result = await remark()
        .use(html)
        .process(markdown)
    return result.toString()
}

function parse(markdownText) {
    console.log('markdownText->', markdownText)
    /*  Sample input:
    -------------------------
        this is just a test
        i dont know
        # one two three
        ## four five
        # s
        **cool**
        # **cool** right
    -------------------------
    */
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

function CodeEditor({setHtmlContent}) {

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
                    <br />
                </pre>
                <textarea spellCheck="false" className="hiddenInput" onChange={(e) => setCodeChange(e.target.value)}></textarea>
            </div>
        </div>
    )
}

export default CodeEditor;