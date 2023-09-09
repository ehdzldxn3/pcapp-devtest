import { createAsyncThunk } from "@reduxjs/toolkit";
import branch from "../pages/api/branch.json"
import unit from "../pages/api/unit.json"
import unitItem from "../pages/api/unit-item.json"
import { Unit, UnitItem, UnitTableData, UnitStatistic, UnitItemTableData } from "types/type";


export const unitStatisticAction = createAsyncThunk('unitStatisticAction', async (branchId: string , { rejectWithValue }) => {
    try {

        const unitArr: Array<Unit> = new Array<Unit>
        const unitItemArr: Array<UnitItem> = new Array<UnitItem>

        let unitUsingCount: number = 0  // 이용중
        let unitTobeCount: number = 0  //이용예정
        let unitEndCount: number = 0 // 이용종료
        let unitUsingTotalPer: number = 0 //이용퍼센트

        if( unit !== undefined && unit.map.length > 0 ) {
            unit.map((item: Unit, index: number) => {
                if (item && item.branchId?.toString() === branchId) unitArr.push(item)
            })
        }

        if( unitArr && unitArr.length > 0 ) {
            unitArr.map((item: Unit, index) => {
                let unitArrIndex = index
                unitItem.map((item: UnitItem, index: number) => {
                    if(item.unitId === unitArr[unitArrIndex].id) unitItemArr.push(item)
                })                
            })
        } 

        if( unitItemArr && unitItemArr.length > 0 ) {
            unitItemArr.forEach((item: UnitItem) => {
                const sDate = new Date(item.startDate);
                const eDate = new Date(item.endDate);
                const today = new Date();
            
                if (today.getTime() >= sDate.getTime() && today.getTime() < eDate.getTime()) {
                    // 이용중
                    unitUsingCount++
                } else if (today.getTime() < sDate.getTime()) {
                    // 이용예정
                    unitTobeCount++
                } else if (today.getTime() >= eDate.getTime()) {
                    // 이용종료    
                    unitEndCount++
                }
            });
        }

        
        unitUsingTotalPer = unitUsingCount > 0 ? (unitUsingCount / unitItemArr.length ) * 100 : 0
        
        const response = {
            unitTotalCount : unitArr.length, //전체 유닛 개수
            unitItemTotalCount : unitItemArr.length,
            unitUsingTotalPer, //이용중 비율
            unitUsingCount,  // 이용중
            unitTobeCount,  //이용예정
            unitEndCount // 이용종료
        }  as UnitStatistic
        
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})


export const unitTableDataAction = createAsyncThunk('unitTableDataAction', async (branchId: string , { rejectWithValue }) => {
    try {

        const unitArr: Array<Unit> = new Array<Unit>
        const unitTableData: Array<UnitTableData> = new Array<UnitTableData>

        let unitSharePer: number = 0
        let unitShareCount: number = 0
        if( unit !== undefined && unit.map.length > 0 ) {
            unit.map((item: Unit, index: number) => {
                if (item && item.branchId?.toString() === branchId) {
                    unitArr.push(item)
                    unitShareCount += item.numberOfUnitItems
                }  
            })
        }
        

        if( unitArr && unitArr.length > 0 ) {
            unitArr.map((item: Unit, index: number) => {
                let unitArrIndex: number = index
                let unitUsingCount: number = 0
                unitItem.map((item: UnitItem, index: number) => {
                    if(item.unitId === unitArr[unitArrIndex].id) {
                        const sDate = new Date(item.startDate);
                        const eDate = new Date(item.endDate);
                        const today = new Date();
                        
                        if (today.getTime() >= sDate.getTime() && today.getTime() < eDate.getTime()) {
                            unitUsingCount++
                        }
                    }
                })        
                unitSharePer = item.numberOfUnitItems > 0 ? (unitUsingCount / unitShareCount ) * 100 : 0,
                
                unitTableData.push({
                    unitId : unitArr[unitArrIndex].id,
                    unitName : unitArr[unitArrIndex].unitName,
                    unitItemCount : unitArr[unitArrIndex].numberOfUnitItems,
                    unitUsingCount : unitUsingCount,
                    unitSharePer : unitSharePer,
                    numberOfUnits : unitArr[unitArrIndex].numberOfUnitItems,
                    width : unitArr[unitArrIndex].width,
                    depth : unitArr[unitArrIndex].depth,
                    height : unitArr[unitArrIndex].height,
                    priceValue : unitArr[unitArrIndex].priceValue
                })
                
            })
        } 

        const response: Array<UnitTableData> = unitTableData

        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const unitItemTableData = createAsyncThunk('unitItemTableData', async (branchId: string , { rejectWithValue }) => {
    try {

        const unitArr: Array<Unit> = new Array<Unit>
        const unitItemTableData: Array<UnitItemTableData> = new Array<UnitItemTableData>
        
        let unitShareCount: number = 0


        // 현재 유닛을 저장
        if( unit && unit.map.length > 0 ) {
            unit.map((item: Unit, index: number) => {
                if (item && item.branchId?.toString() === branchId) unitArr.push(item)
            })
        }
        
        // 현재 유닛 아이템 
        if( unitArr && unitArr.length > 0 ) {
            unitArr.map((item: Unit, index: number) => {
                let unitName: string = item.unitName
                let unitArrIndex: number = index

                unitItem.map((item: UnitItem, index: number) => {
                    if(item.unitId === unitArr[unitArrIndex].id) {
                        const sDate = new Date(item.startDate)
                        const eDate = new Date(item.endDate)
                        const today = new Date()
                        const totalTime = eDate.getTime() - sDate.getTime()
                        const elapsed = today.getTime() - sDate.getTime()
                        const unitItemUse: number = (elapsed / totalTime) * 100
                        const sYear = sDate.getFullYear().toString()
                        const sMonth = (sDate.getMonth() + 1).toString().padStart(2, '0')
                        const sDay = sDate.getDate().toString().padStart(2, '0');
                        const eYear = eDate.getFullYear().toString()
                        const eMonth = (eDate.getMonth() + 1).toString().padStart(2, '0')
                        const eDay = eDate.getDate().toString().padStart(2, '0');
                        

                        let unitItemState: string = ''

                        if (today.getTime() >= sDate.getTime() && today.getTime() < eDate.getTime()) {
                            // 이용중
                            unitItemState = '이용중'
                        } else if (today.getTime() < sDate.getTime()) {
                            // 이용예정
                            unitItemState = '이용예정'
                        } else if (today.getTime() >= eDate.getTime()) {
                            // 이용종료    
                            unitItemState = '이용종료'
                        }

                        
                        
                        unitItemTableData.push({
                            unitItemId : item.id, // 유닛 아이템 id
                            unitId : item.id, // 유닛 id
                            unitName : unitName,   // 유닛 이름
                            unitItemName : item.unitItemName,   // 유닛 아이템 이름
                            unitItemState : unitItemState,  //유닛 아이템 상태
                            unitItemUse : unitItemUse,  // 유닛 아이템 이용기간 경과
                            startDate : `${sYear}-${sMonth}-${sDay}`, // 이용 시작일
                            endDate : `${eYear}-${eMonth}-${eDay}`, // 이용 종료일
                            resNumber :  Math.floor(Math.random() * (100 - 1 + 1)) + 1 // 예약 번호
                        })                         
                        
                        
                        
                    }

                   
                })        
                
                
            })
        } 

        const response: Array<UnitItemTableData> = unitItemTableData

        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
})
