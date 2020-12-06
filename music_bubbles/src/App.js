import './App.css';
import BigBubble from './components/BigBubble';
import { readString } from 'react-papaparse';
import Medieval from './audio/JeVivroieLiement-GuillaumeDeMachaut.mp3'
function App() {

  const bubbles = `name,description,audio file name,parent,child
"Medieval","Created Western classical nomenclature, i.e. Music Theory","../audio/JeVivroieLiement-GuillaumeDeMachaut.mp3","","Renaissance"
"Renaissance","Range, rhythm, harmony, and form expanded, but dissonance was frowned upon.","../audio/D'oùVientCelaBelle-ClaudindeSermisy.mp3","Medieval","Baroque"
"Baroque","Ornate, fugues, counterpoint, and more: decorated and mathematically perfect.","../audio/LittleFugueInGMinor-JSBach.mp3","Renaissance","Classical"
"Classical","Focusing on simplicity and elegance in homophonic style. Long Live Mozart","../audio/mozart.mp3","Baroque","Early Romantic"
"Early Romantic","Oh amore mio, che meraviglia e lirica.","../audio/Serenade-Schubert.mp3","Classical","Romantic"
"Romantic","Intense, emotional, Opera-tic: Exaggeration is the name, and Tchaikofsky is a brain.","../audio/CarmenOverture-Bizert.mp3","Early Romantic","Impressionist"
"Impressionist","Colorful, atonal, and valuing the artist's voice above all else.","../audio/ClairDeLune-ClaudeDebussy","Romantic","Contemporary"
"Contemporary","Begone limitations, it's our time to stretch the horizons.","../audio/StringQuartetNo8-BenJohnston.mp3","Impressionist",""`;
const results = readString(bubbles, {header:true});
/*var source = new Audio(results.data[0]["audio file name"]); //Doesnt work as intended yet */
  return (
    <div className="App">
      <BigBubble 
        parent = {results.data[0]["parent"]}
        childOne = {results.data[0]["child"]}
        genre = {results.data[0]["name"]}
        song = {Medieval}
        info = {results.data[0]["description"]}
      />
    </div>
  );
}

export default App;