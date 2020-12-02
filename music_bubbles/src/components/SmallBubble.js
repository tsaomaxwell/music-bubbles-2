import './SmallBubble.css';


function SmallBubble(props){

    return <div className = 'outer'>
        <div className = 'name'>
            {props.title}
        </div>
    </div>
    
}


export default SmallBubble;