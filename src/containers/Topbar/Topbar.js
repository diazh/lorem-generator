import React, { Component } from 'react'
import { Menu, GithubOutlined } from 'antd'

class Topbar extends Component {


    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="lorem" >
                    Lorem
                </Menu.Item>
                <Menu.Item key="github">
                    Github
                </Menu.Item>
                
            </Menu>
        )
    }
}

export default React.memo(Topbar)