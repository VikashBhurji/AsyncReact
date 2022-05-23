
import './App.css';
import Filters from './components/Filters';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userInfo from './data/userInfo.json';
import offer from './data/offer.json'
function App() {
  return (
    <div>
      <Navbar {...userInfo.location}/>
      <Offers offer={offer}/>
      <Filters/>
      <Restaurants/>
    </div>
  );
}

export default App;
