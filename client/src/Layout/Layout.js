import { FileOutlined, PieChartOutlined, UserOutlined,DesktopOutlined,TeamOutlined } from '@ant-design/icons';

import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import "./Layout.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const {Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
}
  
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Layout
                style={{
                minHeight: '100vh',
                minWidth: "1500px",
                width: "auto"
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{
                    marginRight:"100px",
                    }}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout 
                style={{
                    margin:"10px",
                    idth: "100%"
                    }}>
                <Header/>
                
                <Content
                    style={{
                    margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                    >
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 360,
                    }}
                    >
                    Bill is a cat.
                    </div>
                </Content>
                <Footer/>
                </Layout>
            </Layout>
        </div>
    );
  };
  
export default App;