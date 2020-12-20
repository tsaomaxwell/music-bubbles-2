import './App.css';
import React, { useState } from 'react';
import BigBubble from './components/BigBubble';
import Homepage from './components/Homepage';
import { readString } from 'react-papaparse';
import Medieval from './audio/JeVivroieLiement-GuillaumeDeMachaut.mp3'
import starter from './audio/starter.mp3'
function App() {
  const [page, setPage] = useState("Home"); 
  function getBigBubble(props){
    setPage(props.page);
  }

  const bubbles = `name,description,audio file name,parent,child
"Medieval","Created Western classical nomenclature, i.e. Music Theory. (500-1420)","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"
"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon. (1400-1600)","../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"
"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect. (1600-1750)","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"
"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart. (1750-1820)","../audio/mozart.mp3","Baroque","Early Romantic"
"Early Romantic","Oh amore mio, che meraviglia e lirica. (1770-1840)","../audio/Serenade-Schubert.mp3","Classical","Romantic"
"Romantic","Intense, emotional, Opera-tic: Exaggeration is the name, and Tchaikofsky is a brain. (1800-1910)","../audio/CarmenOverture-Bizert.mp3","Early Romantic","Impressionist"
"Impressionist","Colorful, atonal, and valuing the artist's voice above all else. (1890-1925)","../audio/ClairDeLune-ClaudeDebussy","Romantic","Postmodern/Contemporary"
"Postmodern/Contemporary","Begone limitations, it's our time to stretch the horizons. (1950-Present)","../audio/StringQuartetNo8-BenJohnston.mp3","Impressionist",""`;
  const results = readString(bubbles, {header:true});
  /*var source = new Audio(results.data[0]["audio file name"]); //Doesnt work as intended yet */
  if(page === "Home"){
    return ( 
      <div>
      <Homepage
        getBigBubble = {getBigBubble}
        name1 = "Classical"
        name2 = "Pop"
        name3 = "Rock"
      />
    </div>
      )
  }
  else{
    return (
      <div className="App">
        <BigBubble 
          /*parent = {results.data[0]["parent"]}
          childOne = {results.data[0]["child"]}
          genre = {results.data[0]["name"]}
          song = {Medieval}
          info = {results.data[0]["description"]}*/
          parent = "By: Jakob R., Maxwell T., Taylor C."
          childOne = "Click here to start!"
          genre = "Duo: Music Bubbles"
          song = {starter}
          info = "A brief history of classical music illustrated by bubbles!"
        />
      </div>
    );
  }
}

export default App;


/* Add later: "Neoclassist","Composers sought to aesthetic precepts broadly defined as 'classicism': order, balance, clarity, and restraint. (1920-1950)","AUDIO","Impressionist","Contemporary"
"Modernist","Aesthetic stance underlying the period of development in music occuring around the turn of the 20th century. (1890-1975)","AUDIO","Romantic","Impressionist"*/