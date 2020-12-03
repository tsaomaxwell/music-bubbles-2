import React, { useState } from 'react'
//mport ReactDOM from 'react-dom'
//import CSVReader from 'react-csv-reader'
import './BigBubble.css';
import SmallBubble from './SmallBubble.js'



function BigBubble(props){
    const [parentsName, setParentsName] = useState(props.parent); // update later to array handling
    const [childOneName, setChildOneName] = useState(props.childOne);// update later for array handling
    const [mainName, setMainName] = useState(props.genre);
    const [musicInfo, setMusicInfo] = useState(props.info);
    const [playSong, setPlaySong] = useState(props.song);
    
    function getBubble(props){
        setParentsName("Classical");
        setChildOneName("Impressionist");
        setMainName("Romantic");
        setMusicInfo("It's all in the name. 1830-1900");

        console.log("clicked");
    
    }

    return <div className = "Big">
        <SmallBubble
            title={parentsName}
            onClick={getBubble}
        />

        <div className = 'inner'>
            <div className = 'name'>
                {mainName}
            </div>
            <p></p>
            <audio controls>
                <source src={playSong} type = "audio/mpeg" />
                Music not supported
            </audio>
            <p></p>
            <div className = 'info'>
                {musicInfo}
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