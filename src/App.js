import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appstore from './utils/appstore';
import Browse from './components/Browse';

function App() {
  return (
    <div>
      <Provider store={appstore}>
        <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
