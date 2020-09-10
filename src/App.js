import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Topbar from './containers/Topbar/Topbar';
import MainApp from './containers/App/App';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
class App extends Component {
  render() {



    return (
      <Layout className="layout" style={{height: "100vh"}}>
        <Header style={{textAlign: "right"}}>
          <Menu mode="horizontal" style={{width: "100%", textAlign: "right"}}>
            <Menu.Item key="1">Lorem</Menu.Item>
            <Menu.Item key="2">Github</Menu.Item>
            <Menu.Item key="3">Estudio Media</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          
          <MainApp />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Héctor Díaz ©2020</Footer>
      </Layout>
    )
  }
}

export default App;
