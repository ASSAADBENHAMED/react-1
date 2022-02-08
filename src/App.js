
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#">from</a>
      <a class="nav-item nav-link" href="#">conctat</a>
      <a class="nav-item nav-link" href="#">about</a>
    </div>
  </div>
</nav>
      </header> 
   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />

  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<br /><br/><br/>
<footer class="page-footer font-small blue">
<div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  

</footer>  

   </div>
  );
}


export default App;
