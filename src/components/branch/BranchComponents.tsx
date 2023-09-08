import styles from './branchComponents.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from 'reducers/rootReducer';
import { Branch, BranchStateType, BranchStatisticType } from 'types/type';
import { AppDispatch } from 'store/configureStore';
import { Table } from 'antd';
import { Dispatch, SetStateAction } from 'react';

const columns = [
  {
    
  },
  {
    title: '순번',
    dataIndex: 'index', // 데이터 배열의 필드와 연결
    key: 'index', // 고유 키
    render: (text: string, record: Branch, index: number) => index +1
  },
  {
    title: '창고명',
    dataIndex: 'branchName',
    key: 'branchName',
  },
  {
    title: '운영상태',
    dataIndex: 'isAvailable',
    key: 'isAvailable',
    render: (text: string, record: Branch, index: number) => {
      if(record.isAvailable === 0)  return <h1 className={styles.avai}><span className={styles.red}></span>미운영</h1>
      if(record.isAvailable === 1) return <h1 className={styles.avai}><span  className={styles.green}></span>운영중</h1>
    } 
  },
  {
    title: '검수상태',
    dataIndex: 'isExamined',
    key: 'isExamined',
    render: (text: string, record: Branch, index: number) => {
      if(record.isExamined === 0)  return <h1 className={styles.avai}><span className={styles.blue}></span>검수중</h1>
      if(record.isExamined === 1) return <h1 className={styles.avai}><span  className={styles.green}></span>검수완료</h1>
      if(record.isExamined === 2) return <h1 className={styles.avai}><span  className={styles.orange}></span>검수반료</h1>
    }
  },
  {
    title: '유닛',
    dataIndex: 'numberOfUnits',
    key: 'numberOfUnits',
  },
  {
    title: '등록일',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text: string, record: Branch, index: number) => {
      const date = new Date(record.createdAt.toString())
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 두 자릿수로 만듭니다.
      const day = String(date.getDate()).padStart(2, '0'); // 일을 두 자릿수로 만듭니다.
      return `${year}-${month}-${day}`;
    }
  },

  {
    title: '수정일',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: (text: string, record: Branch, index: number) => {
      const date = new Date(record.updatedAt.toString())
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 두 자릿수로 만듭니다.
      const day = String(date.getDate()).padStart(2, '0'); // 일을 두 자릿수로 만듭니다.
      return `${year}-${month}-${day}`;
    }
  },
  {
    title: '관리',
    dataIndex: 'sup',
    key: 'sup',
    render: (text: string, record: Branch, index: number) => {
      return (
        <span className={styles['table-btn-wrap']}>
          <button onClick={(e) => {
            const targetButton = e.target as HTMLButtonElement
            const buttonText = targetButton.textContent
            console.log(buttonText)
            e.stopPropagation()
          }}>창고</button>
          <button onClick={(e) => {
            const targetButton = e.target as HTMLButtonElement
            const buttonText = targetButton.textContent
            console.log(buttonText)            
            e.stopPropagation()
          }}>유닛</button>
          <button onClick={(e) => {
            const targetButton = e.target as HTMLButtonElement
            const buttonText = targetButton.textContent
            console.log(buttonText)
            e.stopPropagation()    
          }}>예약</button>
        </span>

      )
    }    
  }   
]

interface propsType {
  setLayoutContent: Dispatch<SetStateAction<string>>;
}

const BranchComponents = ({setLayoutContent}: propsType) => {
  const dispatch = useDispatch<AppDispatch>();

  const branchState: BranchStateType = useSelector((state: ReducerType) => state.branch)
  const stat: BranchStatisticType = branchState.branchStatistic
  const tableData: Array<Branch> = branchState.branchData

  
  const consoleLog = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetButton = e.target as HTMLButtonElement
    const buttonText = targetButton.textContent
    console.log(buttonText)
  }
  
  

  return (
    <>
      <section className={styles.section}>
        <h1>창고</h1>
        <div className={styles.statistic}>
          {branchState.branchStatisticError !== false ? (
            <h1 className={`red fz30`}>no data.</h1>
          ) : (
            <div className={styles['statistic-wrap']}>
              <ul>
                <li>
                  <h1>전체</h1>
                  <h2>{stat.totalBranch.toString()}</h2>
                </li>
                <li>
                  <h1>
                    <span className={styles.blue}></span> 검수중
                  </h1>
                  <h2>{stat.underExamined.toString()}</h2>
                </li>
                <li>
                  <h1>
                    <span className={styles.green}></span> 검수완료
                  </h1>
                  <h2>{stat.examined.toString()}</h2>
                </li>
                <li>
                  <h1>
                    <span className={styles.orange}></span> 검수반려
                  </h1>
                  <h2>{stat.notExamined.toString()}</h2>
                </li>
                <li>
                  <h1>
                    <span className={styles.red}></span> 미운영
                  </h1>
                  <h2>{stat.available.toString()}</h2>
                </li>
                <li>
                  <h1>
                    <span className={styles.greenyellow}></span> 운영중
                  </h1>
                  <h2>{stat.notAvailable.toString()}</h2>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className={styles.table}>
        <div className={styles['table-wrap']}>

          <div className={styles['branch-add-wrap']}>
            <button onClick={(e) => consoleLog(e)}>창고추가</button>
          </div>

          <div className={styles['table-box']}>
            <Table 
            dataSource={tableData} 
            columns={columns} 
            rowKey={(render) => render.id}
            onRow={(record) => ({
              onClick: (e) => {setLayoutContent('UNIT')}
            })}
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default BranchComponents;
