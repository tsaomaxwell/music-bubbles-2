import './App.css';

import BigBubble from './components/BigBubble';
import { readString } from 'react-papaparse';
import classical from './audio/mozart.mp3';


function App() {

  const bubbles = `name,description,audio file name,parent,child
"Medieval","Created Western classical nomenclature, i.e. Music Theory","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"
"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon.","../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"
"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect.","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"
"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart","Baroque","Early Romantic","../audio/mozart.mp3"


`;
const results = readString(bubbles, {header:true});

  return (
    <div className="App">
      <BigBubble 
        parent = {results.data[0]["parent"]}
        childOne = {results.data[0]["child"]}
        genre = {results.data[0]["name"]}
        song = {classical}
        info = {results.data[0]["description"]}
      />
    </div>
  );
}

export default App;
