import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <Note title="First Title" content="This is the first content" />
      <Footer />
    </>
  );
}

export default App;
