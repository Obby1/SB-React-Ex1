const Tweet = (props) =>{
    console.log('Tweet properties:', props)
    return(
        <ul>
            <li>Username: {props.username}</li>
            <li>Legal Name: {props.realName}</li>
            <li>Date: {props.date}</li>
            <li>Message: {props.message}</li>
        </ul>
    )
}

