import './App.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

function App() {
  return (
    <div>
      <div className='image-section-1'>
      <Section1 />
      </div>   
      <Section2 />
    </div>
  );
}

export default App;
