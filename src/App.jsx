import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import { Component } from "react";

class App extends Component {
  state = {
    selectedAsin: "",
  };

  setAsin = (asin) => this.setState({ selectedAsin: asin });

  render() {
    return (
      <div className="App">
        <MyNav />
        <MyJumbotron />
        <Container>
          <Row>
            {/* <AllTheBooks /> */}
            <Col>
              <BookList books={fantasy} setAsin={this.setAsin} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
