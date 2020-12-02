import './App.css';

import SmallBubble from './components/SmallBubble';
import BigBubble from './components/BigBubble';

import classical from './audio/mozart.mp3';

function App() {
  return (
    <div className="App">
      <BigBubble 
        parent = 'Baroque'
        child = 'Romantic'
        genre = 'Classical'
        song = {classical}
      />
    </div>
  );
}

export default App;
