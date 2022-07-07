import './App.css';
import Header from './components/header/Header';
import FirstColumn from './components/hero/First-column';
import SecondColumn from './components/hero/Second-column';
import ConeptColumn from './components/hero/Conept-column';
import Carousel from './components/carousel/Carousel';
import Games from './components/games/Games';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="bg-red">
          <Header />
          <div className="container content">
            <div className="row h-100">
              <FirstColumn />
              <SecondColumn />
              <ConeptColumn />
            </div>
          </div>
        </div>
        <Carousel />
        <Games />
        <Footer />
      </div>
    </div>
  );
}

export default App;
