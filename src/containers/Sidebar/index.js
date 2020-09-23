import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    AlignLeftOutlined,
    UserOutlined,
    GithubOutlined,
    GlobalOutlined
}
    from '@ant-design/icons';
import './sidebar.css'
import logo from '../../assets/logo_w.svg'
import { Link, Router } from 'react-router-dom';


const { Sider } = Layout;
const { SubMenu } = Menu;
class Sidebar extends Component {



    render() {

        return (

            <Sider collapsible collapsed={this.props.collapsed} onCollapse={this.props.onCollapse} className="coffee-sidebar">
                <div className="coffee-logo">
                    <img src={logo} />
                    <span className="coffee-title">Coffee Ipsum</span>
                </div>
                <ul className="coffee-menu">
                    <li key="1" className="coffee-menu-item"><Link to="generator"> <AlignLeftOutlined /> <span className="menu-label">Generator</span></Link></li>
                    <li key="2" className="coffee-menu-item"><Link to="about"><UserOutlined /> <span className="menu-label">About</span></Link></li>
                    <li key="3" className="coffee-menu-item"><GithubOutlined /> <span className="menu-label">Github</span></li>
                    <li key="4" className="coffee-menu-item"><GlobalOutlined /> <span className="menu-label">EstudioMedia</span></li>
                </ul>
            </Sider>

        )
    }
}

export default Sidebar;