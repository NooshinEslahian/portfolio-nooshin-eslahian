import { useState } from "react";
import BackToTop from "./Components/BackToTop";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Me from "./Components/Me";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" >
        <Me/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <BackToTop/>
      </main>
    </div>
  );
}

export default App;
