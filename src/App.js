import React from 'react';
import './App.css';
import {
  Layout, 
  Header, 
  Navigation, 
  Drawer, 
  Content} from 'react-mdl';
import Main from './componets/main';
import {Link} from 'react-router-dom';


const App = () => {
  return (
  <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<span>Shekcon</span>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Quang Sang" className="menu-title">
            <Navigation className="menu-link" >
                <Link className="menu-link-content" to="/resume">Resume</Link>
                <Link className="menu-link-content" to="/">About</Link>
                <Link className="menu-link-content" to="/projects">Projects</Link>
                <Link className="menu-link-content" to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content >
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
  </div>
  );
}

export default App;
