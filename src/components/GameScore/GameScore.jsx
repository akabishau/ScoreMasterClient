import './GameScore.css';

function GameScore({ gameName, date, players }) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formatedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return (
    <>
      <h2 className="game-score__header">{gameName}</h2>
      <div className="game-score__body">
        <div className="game-score__date">{formatedDate}</div>
        <div className="game-score__text">{players}</div>
      </div>
    </>
  );
}

export default GameScore;
