import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Coin from './components/Coin';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
function App() {
  return (
    <Router>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coin/>}/>
        <Route path='/' element={<Exchanges/>}/>
        <Route path='/' element={<CoinDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
