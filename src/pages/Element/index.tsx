import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { useModel } from 'umi';

const index = () => {
  const { routes, setRoutes } = useModel('menu');
  console.log('element');

  // 1.layout
  // 2.useModel
  const [text, setText] = useState();
  function handleBlur(e) {
    console.log(e.target.defaultValue);
    setText(e.target.defaultValue?.trim());
  }
  function handleStore() {
    console.log(text);
    const routes = [
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
          { label: text, key: 'submenu-item-4' },
        ],
      },
    ];

    setRoutes(routes);
  }
  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        justifyContent: 'center',
        alignContent: 'space-between',
      }}
    >
      <Input onBlur={handleBlur} style={{ marginRight: '100px' }} />{' '}
      <Button type="primary" onClick={handleStore}>
        保存
      </Button>
    </div>
  );
};

export default index;
