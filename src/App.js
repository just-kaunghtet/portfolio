import Header from './home/header';
import Home from './home/home'
import About from  './home/about'
import Projects from './home/projects';
import Detail from './home/detail';
import Contact from './home/contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Projects/>
      <Detail/>
      <Contact/>
    </div>
  );
}

export default App;
