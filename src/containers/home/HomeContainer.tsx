import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import { Affix, Layout, Menu } from 'antd';
import type { AppProps, MenuProps } from 'antd';

import { Branch } from '../../types/type'

const { Header, Sider, Content, Footer } = Layout;

const menuItems: MenuProps['items'] = [
  { key: '1', label: '창고' },
  { key: '2', label: '유닛' },
  
]


const HomeContainer = () => {

  const menu = useSelector((state: any) => state.menu)
  
  return (
    <>
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" />
      </Header>
      <Layout>
        <Affix>
          <Sider style={{ background: 'white', height: '100vh' }}>
            <Menu items={menuItems}/>
          </Sider>
        </Affix>
        <Layout style={{ display: 'flex', flexDirection: 'column' }}>
          <Content>
            
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </>
  )
}

export default HomeContainer