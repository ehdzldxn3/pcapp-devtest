import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import { Affix, Layout, Menu } from 'antd';
import HeaderComponents from '../../components/header/HeaderComponents';
import styles from '../../styles/styles.module.css'


import { Branch } from '../../types/type'

const {  Sider, Content } = Layout;



const HomeContainer = () => {

  const menu = useSelector((state: any) => state.menu)
  
  return (
    <>
    <Layout>
      <HeaderComponents/>
      <Layout>
        <Affix>

          <Sider className={styles['menu-wrap']}>
            {menu.error === false && 
            (<h1 className={styles.err}>메뉴를 불러오지 못했습니다.</h1>)
            
            }
            
            {/* <Menu items={menu.menuList}/> */}
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