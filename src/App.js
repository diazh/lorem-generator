import React, { Component } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import MainApp from './containers/App/App';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {



    return (
      <Layout className="layout" style={{ height: "100vh" }}>
        <Header style={{ textAlign: "right" }}>
          <Menu mode="horizontal" style={{ width: "100%", textAlign: "right" }}>
            <Menu.Item key="2"><a href="https://github.com/diazh/lorem-generator" target="_blank" rel="noopener noreferrer">Github</a></Menu.Item>
            <Menu.Item key="3"><a href="http://estudiomediamx.com" target="_blank" rel="noopener noreferrer">Estudio Media</a></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <BrowserRouter basename="/lorem/">
            <MainApp />
          </BrowserRouter>

        </Content>
        <Footer style={{ textAlign: 'center' }}>EstudioMediaMx ©2020</Footer>
      </Layout>
    )
  }
}

export default App;
