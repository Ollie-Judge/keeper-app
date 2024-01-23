import "../style/note.css";

function Note(props) {
  return (
    <div id="noteContainer">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img src={props.img} alt="image" />
    </div>
  );
}

export default Note;
