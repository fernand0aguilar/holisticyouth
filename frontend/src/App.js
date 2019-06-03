import React, {Component} from 'react';
import './App.css';

import Wrapper from './containers/Wrapper';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Sidebar></Sidebar>
          <Wrapper></Wrapper>
          <Footer></Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
