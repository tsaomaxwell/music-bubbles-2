import './App.css';

import BigBubble from './components/BigBubble';

import classical from './audio/mozart.mp3';

function App() {
  return (
    <div className="App">
      <BigBubble 
        parent = 'Baroque'
        childOne = 'Romantic'
        genre = 'Classical'
        song = {classical}
      />
    </div>
  );
}

export default App;
