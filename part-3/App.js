const App = () => {
    return (
    <div>
        <Person age={180} name="Alf" hobbies = {["sleep", "breathing"]} />
        <Person age={18} name="1234567890" hobbies = {["golf", "food"]} />
        <Person age={1} name="literal baby"  />
    </div>    
    )
}

ReactDOM.render(<App />, document.getElementById("root"))