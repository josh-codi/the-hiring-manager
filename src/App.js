import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/login';
import Footer from './Components/footer';
import { Container } from 'react-bootstrap';
import Header from './Components/header'



function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Login />
        
           
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
