function CodeView(props) {
    let lines = props.userSays.split('\n');
    const linesDoExist = (lines.length !== 0);

    return (
        <div>
            {linesDoExist && lines.map( (element, index) => (
                <div key={index} className="row">
                    <span key={index} className="lineContent">{element}</span>
                </div>
            ))}
        </div>
    )
}

export default CodeView;