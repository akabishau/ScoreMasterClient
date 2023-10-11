import './ScoreList.css';
import ResultCard from '../ScoreCard/ScoreCard';
import ResultItem from '../GameScore/GameScore';

const dummyData = [
  {
    id: 1,
    gameName: 'Everdell',
    players: 'Lesha, Dasha',
    date: new Date()
  },
  {
    id: 2,
    gameName: 'CV',
    players: 'Lesha, Dasha',
    date: new Date()
  }
];

function ScoreList() {
  return (
    <>
      <ResultCard>
        <ResultItem
          gameName={dummyData[0].gameName}
          date={dummyData[0].date}
          players={dummyData[0].players}
        />
      </ResultCard>
      <ResultCard>
        <ResultItem
          gameName={dummyData[1].gameName}
          date={dummyData[1].date}
          players={dummyData[1].players}
        />
      </ResultCard>
    </>
  );
}

export default ScoreList;
