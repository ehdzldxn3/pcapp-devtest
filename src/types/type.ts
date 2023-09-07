export interface Branch {
    id: Number
    branchName: String
    isAvailable: Number
    isExamined: Number
    numberOfUnits: Number
    createdAt: String
    updatedAt: String
}


export interface UnitItem {
    id: Number
    unitId: Number
    unitItemName: String
    startDate: String
    endDate: String
    createdAt: String
    updatedAt: String
}

export interface Unit {
    id: Number
    branchId: Number
    unitName: String
    numberOfUnitItems: Number
    width: Number
    depth: Number
    height: Number
    priceValue: Number
    createdAt: String
    updatedAt: String
}

export interface Menu {
    key: String
    label: String
}

export interface MenuType {
    key : String
    label : String
} 

export interface MenuStateType {
    menuList : Array<MenuType>
    loading : Boolean
    error : Boolean
}

export interface BranchStateType {
    branchStatisticLoding : Boolean
    branchStatisticError : Boolean
    branchStatistic : BranchStatisticType | any
}

export interface BranchStatisticType {
    available : Number
    notAvailable : Number
    examined : Number
    notExamined : Number
    underExamined : Number
    totalBranch : Number
}
