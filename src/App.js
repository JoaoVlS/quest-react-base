import './App.css';
import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paragraph p = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."/>
        <Button label="Baixar CV" />
      </header>
    </div>
  );
}

export default App;
