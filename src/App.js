import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Navbar from 'react-bootstrap/Navbar'


import logo from './logo.svg';
import './App.css';

// ## blue - #053354   red - #360300  green - #002e0e   black - #262626

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClickHello = this.handleClickHello.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.mesage = ""

    this.state = {
      response: '',
      message: 'React-bootstrap + nodejs express',
      post: '',
      ip_address: '',
      version: '',
      show: false,
      backgroundcolor: '#002e0e'
    };
  }

  callAPI() {
    fetch(process.env.PUBLIC_URL+"/message")
        .then(res => res.text())
        .then(res => {
          if (res!==""){
            this.setState({ message: res })
          }
        }
        );
    fetch(process.env.PUBLIC_URL+"/color")
        .then(res => res.text())
        .then(res => {
          if (res!==""){
            this.setState({ backgroundcolor: res })
          }
        }
        );
    fetch(process.env.PUBLIC_URL+"/ipaddress")
        .then(res => res.text())
        .then(res => this.setState({ ip_address: res }));
    fetch(process.env.PUBLIC_URL+"/version")
        .then(res => res.text())
        .then(res => this.setState({ version: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  handleClickHello = async e => {
      this.setState({ show: true });
  }
  handleClose  = async e =>  {
    this.setState({ show: false });
  }


  render() {
    const { backgroundcolor } = this.state
    return (

      <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">CloudControl Solutions</Navbar.Brand>
      </Navbar>
        <header className="App-header" style={{'background-color': backgroundcolor}}>

          <img src={logo} className="App-logo bounce-6" alt="logo" />
          <h2>
            {this.state.message}
          </h2>
          <h6 className="card-subtitle mb-2 text-muted">ip address: {this.state.ip_address}</h6>
          <h6 className="card-subtitle mb-2 text-muted">node: {this.state.version}</h6>
          <div className="App-horizontalgap" ></div>
          <Container>

            <div >
              <Button className="btn_margin" variant="primary" size="lg" onClick={this.handleClickHello}  >
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
        <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Text>
          Powered by Node on AppZ
        </Navbar.Text>

        </Navbar>
      </div>


    );
  }
}

export default App;
