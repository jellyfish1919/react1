
import './App.css';
import Name from './components/Name';
import Navbare from './components/Navbare';
import Price from './components/Price';
import { Card,Button } from 'react-bootstrap';
import Image from './components/Image';
import Description from './components/Description';
import taswira from "./leesin.jpeg" ;


function App() {
  const firstName = "hamza"
  return (
    <div className="App">
      <h1>checkpoint-react$</h1>
<Navbare/>
<h3>{firstName? `hello ${firstName}`: "hello there!!!"}</h3>
<Card style={{ width: '18rem' }}>
  <Image/>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
      <Name/>
        <Card.Text>

        </Card.Text>
        <Description/>
        <Price/>
   
        <Button variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
    {/* DisplayImg */}
    <div className='npl'>
   {/* <img src="darus.jpeg" alt='leesin'/>
   <img src={taswira} alt='leesin'/> */}
   {firstName && <img src={taswira} alt='taswira'/>}
    </div>

    </div>  
  );
}

export default App;
