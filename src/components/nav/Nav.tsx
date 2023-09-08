import styles from './nav.module.css';
import { Menu, MenuProps } from 'antd';

const items: MenuProps['items'] = [
    { "key": "branch", "label": "창고" },
    { "key": "unit", "label": "유닛" }
]
const Nav = () => {
    const contentChange: MenuProps['onClick'] = (e) => {
        console.log(e.key)
        
      }
    return (
        <>
            <div className={styles['menu-wrap']}>
                <h1>asdasdasdasd</h1>
                <Menu items={items} onClick={contentChange}/>
            </div>
        </>
    )
}

export default Nav


