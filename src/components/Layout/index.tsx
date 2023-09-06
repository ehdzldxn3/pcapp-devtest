import React, { useEffect, useState } from 'react';
import { Affix, Layout, Menu } from 'antd';
import type { AppProps, MenuProps } from 'antd';
import branch from '../../pages/api/branch.json'
import { Branch } from '../../types/type'

const { Header, Sider, Content, Footer } = Layout;

const menuItems: MenuProps['items'] = [
  { key: '1', label: '창고' },
  { key: '2', label: '유닛' },
  { key: '3', label: 'TEST' }
]

const PageLayout: React.FC<AppProps> = ({ children }) => {
  
  const [branchData, setBranchData] = useState<Array<Branch>>(branch);
  
  return (
    
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
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
