import BranchComponents from "components/branch/BranchComponents"
import UnitComponents from "components/unit/UnitComponents"
import { Dispatch, SetStateAction } from "react"


interface propsType {
    layoutContent: string
    setLayoutContent: Dispatch<SetStateAction<string>>;
}

const LayoutContent = ({layoutContent, setLayoutContent}: propsType) => {

    

    if (layoutContent === 'BRANCH') {
        return <BranchComponents setLayoutContent={setLayoutContent}/>
    } else if (layoutContent === 'UNIT') {
        return <UnitComponents setLayoutContent={setLayoutContent}/>
    } else {
        return <h1 className={`fz30 red`}>페이지를 불러오지 못했습니다.</h1>
    }
}

export default LayoutContent