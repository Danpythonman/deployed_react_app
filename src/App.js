import logo from './logo.svg';
import './App.css';
import HelloWorldClass from "./components/HelloWorldClass";
import HelloWorldFunction from "./components/HelloWorldFunction";
import Tasks from "./components/Tasks";
import WebcamCapture from "./components/WebcamCapture";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorldClass />
        <HelloWorldFunction />
        <Tasks />
        <WebcamCapture />
      </header>
    </div>
  );
}

export default App;
