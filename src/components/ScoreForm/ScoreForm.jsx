import './ScoreForm.css';
import Button from '../Button/Button';

function ScoreForm({ onSubmit }) {
  const handleAddScore = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
    console.log(formProps);
  };

  return (
    <form className="score-form" onSubmit={handleAddScore}>
      <input type="text" name="gameName" />
      <input type="date" name="date" />
      <input type="text" name="players" />
      <textarea name="scores"></textarea>
      <Button text="Save" onClick />
    </form>
  );
}

export default ScoreForm;
