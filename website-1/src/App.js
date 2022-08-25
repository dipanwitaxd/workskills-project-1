import './App.css';
import NavBar from './components/NavBar/NavBar';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

function App() {
  return (
    <div>
      <div className='image-section-1'>
        <NavBar />
      <Section1 />
      </div>   
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
