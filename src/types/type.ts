export interface Branch {
    id: number
    branchName: string
    isAvailable: number,
    isExamined: number,
    numberOfUnits: number,
    createdAt: string,
    updatedAt: string
}

export interface UnitItem {
    id: number
    unitId: number
    unitItemName: string,
    startDate: string,
    endDate: string,
    createdAt: string,
    updatedAt: string
}

export interface Unit {
    id: number,
    branchId: number,
    unitName: string,
    numberOfUnitItems: number,
    width: number,
    depth: number,
    height: number,
    priceValue: number,
    createdAt: string,
    updatedAt: string
}
  