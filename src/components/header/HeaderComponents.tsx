import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import {  Layout, Menu } from 'antd';


const { Header } = Layout;



const HeaderComponents = () => {

    const menu = useSelector((state: any) => state.menu)

    return (
        <>
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" />
                </Header>
            </Layout>
        </>
    )
}

export default Header