import styles from './unitComponents.module.css';
import { Dispatch, SetStateAction } from 'react';
import { ReducerType } from 'reducers/rootReducer';
import { Select } from 'antd';

interface propsType {
  setLayoutContent: Dispatch<SetStateAction<string>>;
}

const UnitComponents = ({ setLayoutContent }: propsType) => {
  return (
    <>
      <section className={styles.section}>
        <h1>유닛</h1>

        <div className={styles['select-wrap']}>
          <h1 className={`fz20`}>지점</h1>
          <Select
            defaultValue="lucy"
            style={{ width: 700 }}
            // onChange={handleChange}
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyimingheyiminghe' },
              { value: 'disabled', label: 'Disabled', disabled: true },
            ]}
          />
        </div>

        <div className={styles.statistic}>
          {/* {branchState.branchStatisticError !== false ? (
            <h1 className={`red fz30`}>no data.</h1>
          ) : ( */}
          <div className={styles['statistic-wrap']}>
            <ul>
              <li>
                <h1>전체 유닛 개수</h1>
                <h2>121</h2>
              </li>
              <li>
                <h1>
                  <span className={styles.blue}></span> 이용중
                </h1>
                <h2>19 비율 XX%</h2>
              </li>
              <li>
                <h1>
                  <span className={styles.green}></span> 이용예정
                </h1>
                <h2>50</h2>
              </li>
              <li>
                <h1>
                  <span className={styles.orange}></span>이용종료
                </h1>
                <h2></h2>
              </li>
            </ul>
          </div>
          {/* )} */}
        </div>
      </section>

      <section className={styles.table}>
        <div className={styles['table-wrap']}>
          <div className={styles['branch-add-wrap']}>
            <button>유닛 추가</button>
          </div>

          <div className={styles['table-box']}></div>
        </div>
      </section>
    </>
  );
};

export default UnitComponents;
