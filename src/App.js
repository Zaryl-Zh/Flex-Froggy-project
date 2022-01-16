
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import FrogsField from './components/pond/FrogsField';

function App() {

  const style = {
    display: 'flex',
    minWidth: '600px',
    margin: '0',
    backgroundColor: '#43A047',
    color: 'white',
    boxSizing: 'border-box'
  }
  return (

    <div style={style}>
     <Sidebar/>
     <FrogsField/>
    </div>
  );
}

export default App;
