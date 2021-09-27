import './App.css';
import HttpApp from './components/HttpApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <HttpApp/>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
