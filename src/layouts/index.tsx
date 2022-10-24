import styles from './index.less';
import { Menu, Button } from 'antd';
import { useModel } from 'umi';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ReactChild, useEffect, useState } from 'react';
import { history } from 'umi';

export default function IndexPage(props: { children: ReactChild }) {
  const { children } = props;

  const { routes, setRoutes } = useModel('menu');

  const items = [
    {
      label: '菜单一',
      key: 'item-1',
      children: [
        { label: '子菜单1-1', key: 'submenu-item-1' },
        { label: '子菜单1-2', key: 'submenu-item-2' },
      ],
    },
    // 菜单项务必填写 key

    {
      label: '菜单二',
      key: 'item-2',
      children: [
        { label: '子菜单2-1', key: 'submenu-item-3' },
        { label: '子菜单2-2', key: 'submenu-item-4' },
      ],
    },
  ];

  useEffect(() => {
    setRoutes(items);
  }, []);

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function handleClick({ item, key, keyPath, domEvent }) {
    const [subPath, parentPath] = keyPath || [];
    history.push(`/${subPath}${parentPath}`);
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 256 }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          style={{ height: '100vh' }}
          defaultSelectedKeys={['item-1']}
          defaultOpenKeys={['item-2']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={routes}
          onClick={handleClick}
        />
      </div>
      <div style={{ marginTop: 200, marginLeft: '200' }}>{children}</div>
    </div>
  );
}
