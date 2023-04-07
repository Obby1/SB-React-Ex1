const Person = (props) => {
    console.log(props);
    let nickname = (props.name.length > 8) ? props.name.slice(0,8) : props.name;
    let hobbies = props.hobbies ? props.hobbies : false;
    if (props.hobbies) {
        hobbies = 
        <ul>
             <h3>{nickname}'s hobbies: </h3>
             <ul>
             {hobbies.map(h => (
                <li>{h}</li>
                ))}
             </ul>
        </ul>
    } else {
        hobbies = null;
    }
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li> Their name is {props.name} & their age is {props.age} </li>
                <li> {(props.age >= 18) ? 
                    <h3>{nickname} please go vote! </h3> 
                    : 
                    <h3>{nickname} you must be 18 to vote</h3>
                    }
                </li>
            </ul>
            {hobbies}
        </div>
    );
};