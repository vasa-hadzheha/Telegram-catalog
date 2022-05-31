import {
    AppstoreOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    HomeOutlined,
    MailOutlined,
    GithubOutlined,
    SettingOutlined,
    MenuUnfoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import { useState } from 'react';
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [
    getItem('Статистика каналів', '1', <PieChartOutlined />),
    getItem('Навігація', 'nav', <HomeOutlined />, [
      getItem('Головна', 'main'),
      getItem('API', 'api',<SettingOutlined />, [getItem('Option 111', '8'), getItem('Option 121', '9')]),
    ]),
    getItem('Категорії', 'category', <AppstoreOutlined />, [
        getItem('Політика', '10'),
        getItem('Спорт', '11'),
        getItem('Новини', 'sub3', null, [getItem('Option 11', '12'), getItem('Option 12', '13')]),
      ]),
      getItem('Користувач', 'user', <UserOutlined />, [
        getItem('Tom', 'user1'),
        getItem('Bill', 'user2'),
        getItem('Alex', 'user3'),
      ]),
      getItem("Зв'яжіться з нами", '2', <MailOutlined/>),
      getItem('Історія проєкту', 'about', <ContainerOutlined />, [getItem('Про нас', '14',), getItem('GitHub', 'Git', <GithubOutlined />)])
  ];
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <div
        style={{
          width: 256,
          marginRight:"20px",
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{
            height:"80%",
          }}
        />
      </div>
    );
  };
  
  export default App;