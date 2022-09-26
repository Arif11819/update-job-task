import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NoteCard from './components/Note/NoteCard';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Home></Home>
      {/* <Routes>
        <Route path='/notes/:cardId' element={<NoteCard />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
