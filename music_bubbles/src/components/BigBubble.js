import React, { useState , useRef } from 'react'
//mport ReactDOM from 'react-dom'
//import CSVReader from 'react-csv-reader'
import './BigBubble.css';
import SmallBubble from './SmallBubble.js'
import { readString } from 'react-papaparse';
import romantic from '../audio/salutdamour.mp3';


const bubbles = `name,description,audio file name,parent,child
"Medieval","Created Western classical nomenclature, i.e. Music Theory","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"
"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon.","../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"
"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect.","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"`;
const list = readString(bubbles, {header:true});
var currentRow = 0;
const MAX_GENRES = 3;

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
        /*let source = new Audio(list.data[curretRow]["audio file name"])*/
        setSource(source);
        if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    }

    function getOldBubble(props){
        currentRow--; //place where changing currentRow will happen
        if(currentRow > -1)
        {
            setParentsName(list.data[currentRow]["parent"]);
            setChildOneName(list.data[currentRow]["child"]);
            setMainName(list.data[currentRow]["name"]);
            setMusicInfo(list.data[currentRow]["description"]);
            updateSong(romantic);
            console.log("clicked");
        }
        else
        {
            (currentRow++);
        }
    }
    
    //get the next bubble and change the state for all bubbles
    //currently doesnt do that. place holder for now. needs some sort of array handling
    function getNewBubble(props){
        currentRow++; //place where changing currentRow will happen
        if(currentRow < MAX_GENRES)
        {
            setParentsName(list.data[currentRow]["parent"]);
            setChildOneName(list.data[currentRow]["child"]);
            setMainName(list.data[currentRow]["name"]);
            setMusicInfo(list.data[currentRow]["description"]);
            updateSong(romantic);
            console.log("clicked");
        }
        else
        {
            (currentRow--);
        }
    }

    return <div className = "Big">

        <SmallBubble
                title={parentsName}
                onClick={getOldBubble}
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

         <SmallBubble
            title={childOneName}
            onClick={getNewBubble}
        />

    </div>

}

export default BigBubble