import './App.css';
import SearchInput from './components/SearchInput/SearchInput';


function App() {
  
  const [location, setLocation] = useState({
    description: 'Madrid, España',
    lat: 40.4167754,
    lng: -3.7037902
  })
  return (
    <div className='min-h-screen grid place-items-center bg-slate-800'>
      <SearchInput setLocation={setLocation} />

    </div>
  );
}

export default App;
