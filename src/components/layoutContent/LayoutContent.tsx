import BranchComponents from "components/branch/BranchComponents"
import UnitComponents from "components/unit/UnitComponents"


interface propsType {
    layoutContent: string
}

const LayoutContent = ({layoutContent}: propsType) => {

    if (layoutContent === 'branch') {
        return <BranchComponents/>
    } else if (layoutContent === 'unit') {
        return <UnitComponents/>
    } else {
        return <h1 className={`fz30 red`}>페이지를 불러오지 못했습니다.</h1>
    }
}

export default LayoutContent