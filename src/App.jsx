import './App.css'
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";
import travelInfo from "./data/travelInfo.js";

function App() {

  return (
    <div className="App">
      <Navbar />
      {travelInfo.map((cardInfo) => {
        return <TravelCard travelInfo={cardInfo} />
      })}
    </div>
  )
}

export default App
