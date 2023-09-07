
import styles from './branchComponents.module.css'
import { useSelector } from 'react-redux'
import { ReducerType } from 'reducers/rootReducer'
import { BranchStateType, BranchStatisticType } from 'types/type'


const BranchComponents = () => {
  const branchState: BranchStateType = useSelector((state: ReducerType) => state.branch)
  
  const stat: BranchStatisticType = branchState.branchStatistic
  
  return (
    <>
      <section className={styles.section}>
        <h1>창고</h1>



        <div className={styles.statistic}>
          {branchState.branchStatisticError !== false ?
            (<h1 className={`red fz30`}>no data.</h1>)
            :
            (<div className={styles['statistic-wrap']}>
              <ul>
                <li>
                  <h1>전체</h1>
                  <h2>{stat.totalBranch.toString()}</h2>
                </li>
                <li>
                  <h1><span className={styles.blue}></span> 검수중</h1>
                  <h2>{stat.underExamined.toString()}</h2>
                </li>
                <li>
                  <h1><span className={styles.green}></span> 검수완료</h1>
                  <h2>{stat.examined.toString()}</h2>
                </li>
                <li>
                  <h1><span className={styles.orange}></span> 검수반려</h1>
                  <h2>{stat.notExamined.toString()}</h2>
                </li>
                <li>
                  <h1><span className={styles.red}></span> 미운영</h1>
                  <h2>{stat.available.toString()}</h2>
                </li>
                <li>
                  <h1><span className={styles.greenyellow}></span> 운영중</h1>
                  <h2>{stat.notAvailable.toString()}</h2>
                </li>
              </ul>
            </div>)
          }
        </div>


      </section>
    </>
  )
}

export default BranchComponents

