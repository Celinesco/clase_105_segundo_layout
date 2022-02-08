import './App.css';
import CardsContainer from './componentes/CardsContainer';
import Header from './componentes/Header';
import Section from './componentes/Section';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Section />
      <CardsContainer />
    </div>
  );
}

export default App;
