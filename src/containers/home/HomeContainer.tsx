import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import { Affix, Layout, Menu, MenuProps } from 'antd';
import HeaderComponents from '../../components/header/Header';
import styles from '../../styles/styles.module.css'
import LayoutContent from 'components/layoutContent/LayoutContent';
import { ReducerType } from 'reducers/rootReducer';
import { MenuStateType } from '../../types/type';

const {  Sider, Content } = Layout;



const HomeContainer = () => {

  const menu: MenuStateType = useSelector((state: ReducerType) => state.menu)
  
  const [layoutContent, setLayoutContent] = useState<string>('BRANCH')
  const contentChange: MenuProps['onClick'] = (e) => {
    setLayoutContent(e.key)
  }
  return (
    <>
    <Layout>
      
      <Layout>
        {/* <Affix>

          <Sider className={styles['menu-wrap']}>
            {menu.menuListerror !== false ?
            (<h1 className={styles.err}>메뉴를 불러오지 못했습니다.</h1>)
            :
            (<Menu items={menu.menuList} onClick={contentChange}/>)}
          </Sider>
        </Affix> */}

        <Layout className={styles['content-wrap']}>
          <Content>
              <LayoutContent 
                layoutContent={layoutContent}
                setLayoutContent={setLayoutContent}
              />
          </Content>
        </Layout>
      </Layout>


      
    </Layout>
    </>
  )
}

export default HomeContainer