import './SmallBubble.css';


function SmallBubble(props){

    return <div className = 'outer' onClick = {()=> {props.onClick(props)}} >
        <div className = 'nameSmall'>
            {props.title}
        </div>
    </div>
    
}


export default SmallBubble;