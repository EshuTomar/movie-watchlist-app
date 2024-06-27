import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';

import Watched from './components/Watched';
import Add from './components/Add';
import './App.css';

import { GlobalContext, GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header/>

      <Routes>
        <Route exact path='/' element={<Watchlist/>}>
          
        </Route>

        <Route path='/watched' element={<Watched/>}>
          
        </Route>

        <Route path='/add' element={<Add/>}>
          
        </Route>

      </Routes>
   </Router>
   </GlobalProvider>
  );
}

export default App;
