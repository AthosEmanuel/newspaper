import { BrowserRouter } from 'react-router-dom';
import Routers from './routes/routes';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
