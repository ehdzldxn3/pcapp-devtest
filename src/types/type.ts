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

export interface Menu {
    key: string
    label: string
}

export interface MenuType {
    key : string
    label : string
} 

export interface MenuStateType {
    menuList : Array<MenuType>
    menuListloading : Boolean
    menuListerror : Boolean
}

export interface BranchStateType {
    branchStatisticLoding : boolean
    branchStatisticError : boolean
    branchStatistic : BranchStatisticType | any

    branchAddLoding : boolean
    branchAddError : boolean

    branchTableDataLoding : boolean,
    branchTableDataError : boolean,
    branchTableData: Array<Branch> | any
}

export interface BranchStatisticType {
    available : number
    notAvailable : number
    examined : number
    notExamined : number
    underExamined : number
    totalBranch : number
}

