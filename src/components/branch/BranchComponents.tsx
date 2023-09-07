import styles from './branchComponents.module.css'

const BranchComponents = () => {
  
  return (
    <>
        <section className={styles.section}>
            <h1>창고</h1>

            <div className={styles.statistic}>
              <div className={styles['statistic-wrap']}>

                <ul>
                  <li>
                    <h1>전체</h1>
                    <h2>25</h2>
                  </li>
                  <li>
                    <h1><span className={styles.blue}></span> 검수중</h1>
                    <h2>25</h2>
                  </li>
                  <li>
                    <h1><span className={styles.green}></span> 검수완료</h1>
                    <h2>25</h2>
                  </li>
                  <li>
                    <h1><span className={styles.orange}></span> 검수반려</h1>
                    <h2>25</h2>
                  </li>
                  <li>
                    <h1><span className={styles.red}></span> 미운영</h1>
                    <h2>25</h2>
                  </li>
                  <li>
                    <h1><span className={styles.greenyellow}></span> 운영중</h1>
                    <h2>25</h2>
                  </li>
                </ul>

              </div>
            </div>

        </section>
    </>
  )
}

export default BranchComponents