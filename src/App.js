import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import LogTextArea from './LogTextArea';


import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClickHello = this.handleClickHello.bind(this);
    this.handleClose = this.handleClose.bind(this);


    this.state = {
      response: '',
      post: '',
      show: false
    };
  }

  handleClickHello = async e => {
      this.setState({ show: true });
  }
  handleClose  = async e =>  {
    this.setState({ show: false });
  }


  render() {

    return (

      <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">CloudControl Solutions</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>

      </Navbar>
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p className="shadowtext">
            Sample React - NodeJS app
          </p>
          <div className="App-horizontalgap" >text</div>
          <Container>

            <div >
              <Button className="btn_margin" variant="primary" size="lg" onClick={this.handleClickHello}  block>
                say hello
              </Button>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton cssModule={{'modal-title': 'w-100 text-center'}}>
                  <Modal.Title >Hi There !!!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.handleClose}>
                    close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Container>
        </header>
      <footer>
        <div >
              <Navbar bg="dark" variant="dark"  expand="lg" className="fixed-bottom text-center small copyright">
                  <Container>
                        <div>
                        Powered by Node on AppZ
                        </div>
                  </Container>
               </Navbar>
         </div>

    </footer>
      </div>


    );
  }
}

export default App;
