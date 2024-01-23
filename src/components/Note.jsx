import "../style/note.css";

function Note(props) {
  return (
    <div id="noteContainer">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
