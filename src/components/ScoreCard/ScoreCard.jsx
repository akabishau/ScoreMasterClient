import './ScoreCard.css';

function ScoreCard({ children, className }) {
  const cl = 'score-card' + (className ? ' ' + className : '');

  return <button className={cl}>{children}</button>;
}

export default ScoreCard;
