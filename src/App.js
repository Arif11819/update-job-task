import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import EditModal from './components/Note/EditModal';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Home></Home>
    </div>
  );
}

export default App;
