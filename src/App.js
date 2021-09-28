import './App.css';
import HttpApp from './components/HttpApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import {faTimesCircle , faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faTimesCircle,faTimes)

function App() {
  return (
    <div className="App">
      <HttpApp/>
      <ToastContainer position="top-left" />
    </div>
  );
}

export default App;
