export interface Branch {
    id: number
    branchName: string
    isAvailable: number
    isExamined: number
    numberOfUnits: number
    createdAt: string
    updatedAt: string
}


export interface UnitItem {
    id: number
    unitId: number
    unitItemName: string
    startDate: string
    endDate: string
    createdAt: string
    updatedAt: string
}

export interface Unit {
    id: number
    branchId: number
    unitName: string
    numberOfUnitItems: number
    width: number
    depth: number
    height: number
    priceValue: number
    createdAt: string
    updatedAt: string
}

export interface UnitBranchSelect {
    value: string
    label: string
}

export interface BranchStateType {
    branchStatisticLoding : boolean
    branchStatisticError : boolean
    branchStatistic : BranchStatisticType | any

    branchAddLoding : boolean
    branchAddError : boolean

    branchDataLoding : boolean,
    branchDataError : boolean,
    branchData: Array<Branch> | any

    branchUnitSelectListLoding : boolean
    branchUnitSelectListError : boolean
    branchUnitSelectList : Array<UnitBranchSelect> | any

}

export interface BranchStatisticType {
    available : number
    notAvailable : number
    examined : number
    notExamined : number
    underExamined : number
    totalBranch : number
}
export interface UnitStatistic {
    unitTotalCount : number //전체 유닛 개수
    unitUsingTotalPer : number //이용중 비율
    unitUsingCount : number  // 이용중
    unitTobeCount : number  //이용예정
    unitEndCount : number // 이용종료
    unitItemTotalCount : number // 아이템 갯수
}
export interface UnitTableData {
    unitId : number
    unitName : string
    unitItemCount : number
    unitUsingCount : number
    unitSharePer : number
    numberOfUnits : number
    width : number
    depth : number
    height : number
    priceValue : number
}

export interface UnitItemTableData {
    unitItemId : number // 유닛 아이템 id
    unitId : number // 유닛 id
    unitName : string   // 유닛 이름
    unitItemName : string   // 유닛 아이템 이름
    unitItemState : string  //유닛 아이템 상태
    unitItemUse : number  // 유닛 아이템 이용기간 경과
    startDate : string // 이용 시작일
    endDate : string // 이용 종료일
    resNumber : number // 예약 번호
}
export interface UnitStateType {
    unitStatisticLoding : boolean
    unitStatisticError : boolean
    unitStatistic : UnitStatistic | any

    unitTableDataLoding : boolean
    unitTableDataError : boolean
    unitTableData : Array<UnitTableData>  | any

    unitItemTableDataLoding : boolean
    unitItemTableDataError : boolean
    unitItemTableData : Array<UnitItemTableData>  | any
    
}




