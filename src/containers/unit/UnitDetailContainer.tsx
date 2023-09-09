import { Select, Table } from 'antd';
import styles from '../../styles/styles.module.css';
import { ReducerType } from 'reducers/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { UnitBranchSelect, UnitItemTableData, UnitStateType, UnitStatistic, UnitTableData } from 'types/type';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AppDispatch } from 'store/configureStore';
import { unitStatisticAction, unitTableDataAction } from 'actions/unit';





const UnitDetailContainer = () => {

    const router = useRouter()

    const dispatch = useDispatch<AppDispatch>();
    const branchList: Array<UnitBranchSelect> = useSelector((state: ReducerType) => state.branch.branchUnitSelectList)

    const unit: UnitStateType = useSelector((state: ReducerType) => state.unit)
    const unitSta: UnitStatistic = unit.unitStatistic
    const unitTableData: Array<UnitTableData> = unit.unitTableData
    const unitItemTableData: Array<UnitItemTableData> = unit.unitItemTableData

    const [defaultValue, setDefaultValue] = useState<string | any>(router.query?.id?.toString());
    
    useEffect(() => {
        dispatch(unitStatisticAction(defaultValue))
        dispatch(unitTableDataAction(defaultValue))      
    }, [defaultValue]);

    const consoleLog = (e: React.MouseEvent<HTMLButtonElement>) => {
        const targetButton = e.target as HTMLButtonElement
        const buttonText = targetButton.textContent
        console.log(buttonText)
    }

    return (
        <>
            <section className={styles.section}>
                <h1>유닛</h1>

                <div className={styles['select-wrap']}>
                    <h1 className={`fz20`}>지점</h1>
                    <Select
                        defaultValue={defaultValue}
                        style={{ width: 700 }}
                        onChange={(e) => {setDefaultValue(e)}}
                        options={branchList}
                    />
                </div>

                <div className={styles.statistic}>
                    {unit.unitStatisticError !== false ? (
                        <h1 className={`red fz30`}>no data.</h1>
                    ) : (
                        <div className={styles['statistic-wrap']}>
                            <ul>
                                <li>
                                    <h1>전체 유닛 개수</h1>
                                    <h2>{unitSta?.unitItemTotalCount}</h2>
                                </li>
                                <li>
                                    <h1>
                                        <span className={styles.blue}></span> 이용중
                                    </h1>
                                    <h2>{`${unitSta?.unitUsingCount} / 비율 ${unitSta?.unitUsingTotalPer?.toFixed(2)}%`}</h2>
                                </li>
                                <li>
                                    <h1>
                                        <span className={styles.green}></span> 이용예정
                                    </h1>
                                    <h2>{unitSta?.unitTobeCount}</h2>
                                </li>
                                <li>
                                    <h1>
                                        <span className={styles.orange}></span>이용종료
                                    </h1>
                                    <h2>{unitSta?.unitEndCount}</h2>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            <section className={styles.table}>
                <div className={styles['table-wrap']}>
                    <div className={styles['branch-add-wrap']}>
                        <button onClick={(e) => consoleLog(e)}>유닛 추가</button>
                    </div>

                    <div className={styles['table-box']}>
                        <Table
                            dataSource={unitTableData}
                            columns={columns}
                            rowKey={(render) => render.unitId}
                            onRow={(record) => ({
                                // onClick: (e) => console.log(e)
                            })}
                        />
                    </div>
                    <div className={styles['table-box']}>
                        <Table
                            columns={itemolumns}
                            dataSource={unitItemTableData}
                            
                            rowKey={(render) => render.unitItemId}
                            onRow={(record) => ({
                                // onClick: (e) => console.log(e)
                            })}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default UnitDetailContainer

const itemolumns = [
    {
        title: '유닛아이템',
        dataIndex: 'unitItemName', // 데이터 배열의 필드와 연결
        key: 'unitItemName', // 고유 키
        
    },
    {
        title: '유닛',
        dataIndex: 'unitName',
        key: 'unitName',
    },
    {
        title: '상태',
        dataIndex: 'unitItemState',
        key: 'unitItemState'
    },
    {
        title: '이용기간 경과율',
        dataIndex: 'unitItemUse',
        key: 'unitItemUse',
        render: (text: string, record: UnitItemTableData, index: number) => record.unitItemUse.toFixed(2) + '%'
    },
    {
        title: '이용시작일',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: '이용종료일',
        dataIndex: 'endDate',
        key: 'endDate',
    },

    {
        title: '예약번호',
        dataIndex: 'resNumber',
        key: 'resNumber',
    },
    {
        title: '관리',
        dataIndex: 'sup',
        key: 'sup',
        render: (text: string, record: UnitItemTableData, index: number) => {
            return (
                <span className={styles['table-btn-wrap']}>
                    <button onClick={(e) => {
                        const targetButton = e.target as HTMLButtonElement
                        const buttonText = targetButton.textContent
                        console.log(buttonText)
                        e.stopPropagation()
                    }}>수정</button>
                    <button onClick={(e) => {
                        const targetButton = e.target as HTMLButtonElement
                        const buttonText = targetButton.textContent
                        console.log(buttonText)
                        e.stopPropagation()
                    }}>더보기</button>
                </span>
        
            )
        }        
    },
]

const columns = [
    {
        title: '유닛',
        dataIndex: 'unitName', // 데이터 배열의 필드와 연결
        key: 'unitName', // 고유 키
        
    },
    {
        title: '총개수',
        dataIndex: 'unitItemCount',
        key: 'unitItemCount',
    },
    {
        title: '사용중',
        dataIndex: 'unitUsingCount',
        key: 'unitUsingCount'
    },
    {
        title: '점유율',
        dataIndex: 'unitSharePer',
        key: 'unitSharePer',
        render: (text: string, record: UnitTableData, index: number) => record.unitSharePer.toFixed(2) + '%'
    },
    {
        title: '유닛',
        dataIndex: 'numberOfUnits',
        key: 'numberOfUnits',
    },
    {
        title: '너비',
        dataIndex: 'width',
        key: 'width',
    },

    {
        title: '깊이',
        dataIndex: 'depth',
        key: 'depth',
    },
    {
        title: '높이',
        dataIndex: 'height',
        key: 'height',
    },
    {
        title: '이용요금',
        dataIndex: 'priceValue',
        key: 'priceValue',
    },
    {
        title: '관리',
        dataIndex: 'sup',
        key: 'sup',
        render: (text: string, record: UnitTableData, index: number) => {
            return (
                <span className={styles['table-btn-wrap']}>
                    <button onClick={(e) => {
                        const targetButton = e.target as HTMLButtonElement
                        const buttonText = targetButton.textContent
                        console.log(buttonText)
                        e.stopPropagation()
                    }}>수정</button>
                    <button onClick={(e) => {
                        const targetButton = e.target as HTMLButtonElement
                        const buttonText = targetButton.textContent
                        console.log(buttonText)
                        e.stopPropagation()
                    }}>더보기</button>
                </span>
        
            )
        }        
    },

]  
