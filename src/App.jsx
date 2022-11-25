import './App.css'
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import travelInfo from "./data/travelInfo.js";

function App() {

  return (
    <div className="App">
      <Navbar />
      {travelInfo.map((cardInfo, id) => {
        return <TravelCard key={id} travelInfo={cardInfo} id={id} />
      })}
    </div>
  )
}

export default App
