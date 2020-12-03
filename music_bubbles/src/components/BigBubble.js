import React, { useState } from 'react'
//mport ReactDOM from 'react-dom'
//import CSVReader from 'react-csv-reader'
import './BigBubble.css';
import SmallBubble from './SmallBubble.js'



function BigBubble(props){
    const [parentsName, setParentsName] = useState(props.parent); // update later to array handling
    const [childOneName, setChildOneName] = useState(props.childOne);// update later for array handling
    
    function getBubble(props){
        setParentsName("Classical");
        setChildOneName("Impressionist")
        console.log("clicked");
    
        props.info = "It's all in the name. 1830-1900"
    }

    return <div className = "Big">
        <SmallBubble
            title={parentsName}
            onClick={getBubble}
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

        

        <button className='container' onClick={getBubble}>
            <SmallBubble
            title={childOneName}
            />
        </button>
    </div>


}


export default BigBubble;