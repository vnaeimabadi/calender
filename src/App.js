import "./App.css";
import Calendar from "./components/calendar";

function App() {
  return (
    <div className="App">
      <Calendar date="03/10/2022" />
      <Calendar date="23/03/2020" />
    </div>
  );
}

export default App;
