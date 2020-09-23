import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Switch } from 'antd';
import Sidebar from './containers/Sidebar/index'
import MainApp from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';

const { Content } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
    };

    componentDidMount() {
        let that = this
        window.addEventListener("resize", function () {
            console.log(window.innerWidth)
            if (window.innerWidth <= 900) {
                that.setState({ collapsed: true })
            } else {
                that.setState({ collapsed: false })
            }

        });
        window.innerWidth <= 900 ? this.setState({ collapsed: true }) : this.setState({ collapsed: false })
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sidebar collapsed={this.state.collapsed} onCollapse={this.onCollapse} />
                    <Layout className="site-layout">
                        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
                        <Content style={{ margin: '0 16px' }}>
                            <MainApp />
                        </Content>
                        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;