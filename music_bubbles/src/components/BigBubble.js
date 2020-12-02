import React, {  } from 'react';
import './BigBubble.css';
import SmallBubble from './SmallBubble.js'


function BigBubble(props){
    const parentsName = props.parent; // update later to array handling
    const childOneName = props.childOne;// update later for array handling
    
    return <div className = "Big">
        <SmallBubble
            title={parentsName}
        />

        <div className = 'inner'>
            <div className = 'name'>
                {props.genre}
            </div>
            <p></p>
            <audio controls>
                <source src={props.song} type = "audio/mpeg" />
                Music not supported
            </audio>
            <p></p>
            <div className = 'info'>
                {props.info}
            </div>
        </div>

        

        <SmallBubble
            title={childOneName}
        />
    </div>


}


export default BigBubble;