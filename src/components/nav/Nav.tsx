import { useRouter } from 'next/router'
import styles from './nav.module.css';
import { Menu, MenuProps } from 'antd';
import { useEffect } from 'react';

const items: MenuProps['items'] = [
    { "key": "branch", "label": "창고" },
    { "key": "unit", "label": "유닛" }
]
const Nav = () => {
    const router = useRouter()
    const contentChange: MenuProps['onClick'] = (e) => {
        if(e.key === 'branch') router.push(`/${e.key}`)
        if(e.key === 'unit') router.push(`/${e.key}/1`)
    }
    useEffect(()=> {

    },[router])
    return (
        <>
            <div className={styles['menu-wrap']}>
                <Menu items={items} onClick={contentChange}/>
            </div>
        </>
    )
}

export default Nav


