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
        info = 'Lasted from roughly 1730 to 1820 and focused on homophonic style and light elegance'
      />
    </div>
  );
}

export default App;
