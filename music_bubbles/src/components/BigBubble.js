import React, { useState , useRef } from 'react'
//mport ReactDOM from 'react-dom'
//import CSVReader from 'react-csv-reader'
import './BigBubble.css';
import SmallBubble from './SmallBubble.js'

import romantic from '../audio/salutdamour.mp3';


function BigBubble(props){
    //all the states needed to change the bubble contents
    const [parentsName, setParentsName] = useState(props.parent); // update later to array handling
    const [childOneName, setChildOneName] = useState(props.childOne);// update later for array handling
    const [mainName, setMainName] = useState(props.genre);
    const [musicInfo, setMusicInfo] = useState(props.info);
    const [source, setSource] = useState(props.song);

    //create handling to reload the song in each bubble change
    const audioRef = useRef();
    const updateSong = (source) => {
        setSource(source);
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    }
    
    //get the next bubble and change the state for all bubbles
    //currently doesnt do that. place holder for now. needs some sort of array handling
    function getBubble(props){
        setParentsName("Classical");
        setChildOneName("Impressionist");
        setMainName("Romantic");
        setMusicInfo("It's all in the name. 1830-1900");
        updateSong(romantic);
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
            <audio controls ref={audioRef}>
                <source src={source} type = "audio/mpeg" />
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