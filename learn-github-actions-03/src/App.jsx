import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

// Hello
// Hello 2
// Hello 3
// Hello 4
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
