import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import { Affix, Layout, Menu, MenuProps } from 'antd';
import HeaderComponents from '../../components/header/HeaderComponents';
import styles from '../../styles/styles.module.css'


import { Branch } from '../../types/type'
import BranchComponents from 'components/branch/BranchComponents';
import UnitComponents from 'components/unit/UnitComponents';
import LayoutContent from 'components/layoutContent/LayoutContent';

const {  Sider, Content } = Layout;



const HomeContainer = () => {

  const menu = useSelector((state: any) => state.menu)

  const [layoutContent, setLayoutContent] = useState<string>('branch')
  const contentChange: MenuProps['onClick'] = (e) => {
    setLayoutContent(e.key)
  }
  
  return (
    <>
    <Layout>
      <HeaderComponents/>
      <Layout>
        <Affix>

          <Sider className={styles['menu-wrap']}>
            {menu.error !== false ?
            (<h1 className={styles.err}>메뉴를 불러오지 못했습니다.</h1>)
            :
            (<Menu items={menu.menuList} onClick={contentChange}/>)}
          </Sider>
        </Affix>

        <Layout className={styles['content-wrap']}>
          <Content>
              <LayoutContent layoutContent={layoutContent}/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </>
  )
}

export default HomeContainer