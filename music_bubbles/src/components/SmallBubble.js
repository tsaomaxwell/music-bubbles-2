import './SmallBubble.css';


function SmallBubble(props){

    return <div className = 'outer'>
        <div className = 'nameSmall'>
            {props.title}
        </div>
    </div>
    
}


export default SmallBubble;