import './App.css';
import SidePanel from './layouts/SidePanel/SidePanel';
import ResultList from './components/ScoreList/ScoreList';

function App() {
  return (
    <div className="app">
      <SidePanel>
        <ResultList />
      </SidePanel>
      <div>Details</div>
    </div>
  );
}

export default App;
