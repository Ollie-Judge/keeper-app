import "../style/note.css";
import NoteImage from "./NoteImage";

function Note(props) {
  return (
    <div id="noteContainer" className={props.class}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <NoteImage img={props.img} />
    </div>
  );
}

export default Note;
