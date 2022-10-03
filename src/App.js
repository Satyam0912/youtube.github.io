import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import HomePage from './Components/HomePage/HomePage';
import PlayerPage from './Components/PlayerPage/PlayerPage';
import ChannelPage from './Components/ChannelPage/ChannelPage';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/playing' element={<PlayerPage />} />
        <Route path='/channelInfo' element={<ChannelPage />} />
      </Routes>
    </div>
  );
}

export default App;
