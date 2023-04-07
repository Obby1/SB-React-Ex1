const App = () => {
    let message = "If you're reading this from the past, DO NOT advance AI!!! I'm one of the few surivors left. My robot biceps have saved me on countless occasions. I'd also wa"
    return (
        <div>
            <Tweet username="apples" realName="Johnny Apple" date="4/7/23" message="RUN" />
            <Tweet username="Big-Ones88" realName="George Washington" date="4/7/1793" message="mother, feed me" />
            <Tweet username={1234123} realName="LITERALLY THE ROCK" date="2/7/2093" message={message} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))