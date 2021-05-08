import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login';
import Footer from './Components/footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Login />
           
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
