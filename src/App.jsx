import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <Note
        class="first"
        title="First Title"
        content="This is the first content"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dyG9YY1J0V58F-e3hUH8rwHaFj%26pid%3DApi&f=1&ipt=177fbf06add3e3dc50b4fd71f45d540ec8c79507d86267af3af76cc84ddc4045&ipo=images"
      />
      <Footer />
    </>
  );
}

export default App;
