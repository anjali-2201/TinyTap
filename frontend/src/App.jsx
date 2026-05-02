import Navbar from "./components/Navbar";
import ShortenerCard from "./components/ShortenerCard";
import AnalyticsCard from "./components/AnalyticsCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <ShortenerCard />

      <AnalyticsCard />
    </div>
  );
}

export default App;