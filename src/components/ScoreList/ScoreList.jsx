import './ScoreList.css';
import ScoreCard from '../ScoreCard/ScoreCard';
import GameScore from '../GameScore/GameScore';

function ScoreList({ scores }) {
  return (
    <>
      {scores.map(score => (
        <ScoreCard key={score.id}>
          <GameScore
            gameName={score.gameName}
            players={score.players}
            date={score.date}
          />
        </ScoreCard>
      ))}
    </>
  );
}

export default ScoreList;
