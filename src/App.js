import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';

function App() {

  return (
    
    <div className="App">

      <header className="App-header">



      <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Stack direction="horizontal" gap ={5}>
        <Navbar.Brand href="#home">
        <img
              alt=""
              src='/clouds.svg'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'    '}
            FAL Weather Station
        </Navbar.Brand>

        </Stack>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse 
          id="navbarScroll"
          className="justify-content-end">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search query"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar>
       
      

        <div class="right-container">
        

        <card>
        <iframe
          title="temp"
          src="https://thingspeak.com/channels/1793216/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature&type=line"
          width = "425"
          height = "225"
          scrolling="no" 
        >
        </iframe>
        </card>

        <card>
        <iframe
          title="humidity"
          src="https://thingspeak.com/channels/1793216/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity&type=line"
          width = "425"
          height = "225"
          scrolling="no" 
        >
        </iframe>
        </card>

        <card>
        <iframe
          title="moisture"
          src="https://thingspeak.com/channels/1793216/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Soil+Moisture&type=line "
          width = "425"
          height = "225"
          scrolling="no" 
        >
        </iframe>
        </card>

        <card>
        <iframe
          title="pressure "
          src="https://thingspeak.com/channels/1793216/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Pressure&type=line"
          width = "425"
          height = "225"
        >
        </iframe>
        </card>

        <card>
        <iframe
          title="pressure gauge"
          src="https://thingspeak.com/channels/1793216/widgets/499596"
          width = "425"
          height = "225"
          scrolling="no" 
          border-radius= "10"
        >
        </iframe>
        </card>


        <card>
        <iframe
          title="altitude"
          src="https://thingspeak.com/channels/1793216/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Altitude&type=line"
          width = "425"
          height = "225"
          scrolling="no" 
        >
        </iframe>
        </card>

        </div>


      </header>


      {/* <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      </footer> */}
    </div>
    
  );
}

export default App;
