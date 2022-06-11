import './App.css';

function App() {
  return (
    <div className="App">
        <div className="sidebar"></div>
        <div className="content">
            <div className="textarea">
                <textarea className="hidden_input"></textarea>
            </div>
            <div className="preview"></div>
        </div>
    </div>
  );
}

export default App;
