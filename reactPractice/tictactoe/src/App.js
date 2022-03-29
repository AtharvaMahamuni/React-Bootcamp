import logo from './logo.svg';
import './App.css';
import Icon from './components/Icon'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Icon name={'circle'}/>
      <Icon />
      <Icon name={'cross'}/>
    </div>
  );
}

export default App;
