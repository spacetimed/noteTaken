import './App.scss';
import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';

function App() {

    const [htmlContent, setHtmlContent] = useState(""); // State: { 'htmlContent' : ... }

    useEffect(() => {
        // console.log('htmlContent->', htmlContent);
    }, [htmlContent]);

    return (
        <div className="App">
            <div className="sidebar"></div>
            <div className="contentGrid">
                <CodeEditor setHtmlContent={setHtmlContent} />
                <div className="previewContainer" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </div>
        </div>
    );
}

export default App;