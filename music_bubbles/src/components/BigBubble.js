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
import starter from '../audio/starter.mp3'

const songs = [Medieval, Renaissance, Baroque, Classical, EarlyRomantic, Romantic, Impressionist, Contemporary, starter]
const bubbles = `name,description,audio file name,parent,child
"Medieval","Created Western classical nomenclature, i.e. Music Theory. (500-1420)","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"
"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon. (1400-1600)","../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"
"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect. (1600-1750)","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"
"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart. (1750-1820)","../audio/mozart.mp3","Baroque","Early Romantic"
"Early Romantic","Oh amore mio, che meraviglia e lirica. (1770-1840)","../audio/Serenade-Schubert.mp3","Classical","Romantic"
"Romantic","Intense, emotional, Opera-esque: Exaggeration is the name, and Tchaikofsky is a brain. (1800-1910)","../audio/CarmenOverture-Bizert.mp3","Early Romantic","Impressionist"
"Impressionist","Colorful, atonal, and valuing the artist's voice above all else. (1890-1925)","../audio/ClairDeLune-ClaudeDebussy","Romantic","Postmodern/ Contemporary"
"Postmodern/ Contemporary","Begone limitations, it's our time to stretch the horizons. (1950-Present)","../audio/StringQuartetNo8-BenJohnston.mp3","Impressionist","The End"
"Thanks for watching!","Design: Taylor Che; Development: Jakob Reinwald, Maxwell Tsao","./audio/starter.mp3","Go Back",""
`;
const list = readString(bubbles, {header:true});
var currentRow = -1;
const MAX_GENRES = 9;

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