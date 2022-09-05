import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Section4 from "./components/Section4/Section4";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section6second from "./components/Section6/Section6second";
import Section7 from "./components/Section7/Section7";
import Section8 from "./components/Section8/Section8";
import Section9 from "./components/Section9/Section9";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="image-section-1">
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section6second />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}

export default App;
