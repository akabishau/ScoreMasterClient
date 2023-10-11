import './App.css';
import SidePanel from './layouts/SidePanel/SidePanel';
import ScoreList from './components/ScoreList/ScoreList';
import ScoreForm from './components/ScoreForm/ScoreForm';
import { useState } from 'react';

const INITIAL_DATA = [
  {
    id: 1,
    gameName: 'Everdell',
    players: 'Lesha, Dasha, Anya, Maksim',
    date: new Date()
  },
  {
    id: 2,
    gameName: 'CV',
    players: 'Lesha, Dasha',
    date: new Date()
  }
];

function App() {
  const [scores, setScores] = useState(INITIAL_DATA);

  const handleAddScore = score => {
    setScores(oldScores => [
      ...oldScores,
      {
        gameName: score.gameName,
        players: score.players,
        date: new Date(score.date),
        id: oldScores.length > 0 ? Math.max(...oldScores.map(i => i.id)) + 1 : 1
      }
    ]);
  };

  return (
    <div className="app">
      <SidePanel>
        <ScoreList scores={scores} />
      </SidePanel>
      <div>
        <ScoreForm onSubmit={handleAddScore} />
      </div>
    </div>
  );
}

export default App;
