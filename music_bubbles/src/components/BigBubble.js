import React, { useState , useRef } from 'react'
//mport ReactDOM from 'react-dom'
//import CSVReader from 'react-csv-reader'
import './BigBubble.css';
import SmallBubble from './SmallBubble.js'
import { readString } from 'react-papaparse';
import Medieval from '../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3'
import Renaissance from "../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3"
import Baroque from '../audio/LittleFugueInGMinor-JSBach.mp3'
import Classical from '../audio/mozart.mp3'
import EarlyRomantic from '../audio/Serenade-Schubert.mp3'
import Romantic from "../audio/CarmenOverture-Bizet.mp3"
import Impressionist from '../audio/ClairDeLune-ClaudeDebussy.mp3'
import Contemporary from '../audio/StringQuarterNo8-BenJohnston.mp3'

const songs = [Medieval, Renaissance, Baroque, Classical, EarlyRomantic, Romantic, Impressionist, Contemporary]
const bubbles = `name,description,audio file name,parent,child
"Medieval","Created Western classical nomenclature, i.e. Music Theory","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"
"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon.","../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"
"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect.","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"
"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart","../audio/mozart.mp3","Baroque","Early Romantic"
"Early Romantic","Oh amore mio, che meraviglia e lirica.","../audio/Serenade-Schubert.mp3","Classical","Romantic"
"Romantic","Intense, emotional, Opera-tic: Exaggeration is the name, and Tchaikofsky is a brain.","../audio/CarmenOverture-Bizert.mp3","Early Romantic","Impressionist"
"Impressionist","Colorful, atonal, and valuing the artist's voice above all else.","../audio/ClairDeLune-ClaudeDebussy","Romantic","Contemporary","../audio/ClairDeLune-ClaudeDebussy"
"Contemporary","Begone limitations, it's our time to stretch the horizons.","../audio/StringQuartetNo8-BenJohnston.mp3","Impressionist",""`;
const list = readString(bubbles, {header:true});
var currentRow = 0;
const MAX_GENRES = 8;

function BigBubble(props){
    //all the states needed to change the bubble contents
    const [parentsName, setParentsName] = useState(props.parent); // update later to array handling
    const [childOneName, setChildOneName] = useState(props.childOne);// update later for array handling
    const [mainName, setMainName] = useState(props.genre);
    const [musicInfo, setMusicInfo] = useState(props.info);
    const [source, setSource] = useState(props.song);

    //create handling to reload the song in each bubble change
    const audioRef = useRef();
    const updateSong = (sourceName) => {
        setSource(sourceName)
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
            /*updateSong(list.data[currentRow]["audio file name"]);*/
            updateSong(songs[currentRow]);
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
            updateSong(songs[currentRow]);
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