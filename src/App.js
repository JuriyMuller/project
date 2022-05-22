
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Lymcoin from './components/Lymcoin/Lymcoin';
import Benefits from './components/Benefits/Benefits';
import Lymcoin2 from './components/Lymcoin2/Lymcoin2';
import ISheet from './components/ISheet/ISheet';
import Network from "./components/Network/Network"
import Wallets from './components/Wallets/Wallets';
import OurTeam from "./components/OurTeam/OurTeam"
import Charts from "./components/Charts/Charts"
import Miner from "./components/Miner/Miner"
import Events from "./components/Events/Events"
import Donate from "./components/Donate/Donate"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Lymcoin/>
        <Benefits/>
        <Lymcoin2/>
        <ISheet/>
        <Network/>
        <Wallets/>
        <OurTeam/>
        <Charts/>
        <Miner/>
        <Events/>
        <Donate/>
      </main>
      <footer>
        <Footer/>
      </footer>
    
    
   
    </>
  );
}

export default App;
