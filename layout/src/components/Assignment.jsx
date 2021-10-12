import "./Assignment.css";
function Assignment({ props })
{
    console.log(props);
    return (
        <div className="Assignment">
                <div><img className="sachin" src={props.image} alt="/"></img> </div>
                <div>{props.text}</div>
            </div>
)
}
export default Assignment;