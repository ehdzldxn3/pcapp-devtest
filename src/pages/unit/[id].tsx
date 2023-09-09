import {GetServerSideProps, NextPage} from 'next'
import wrapper from "../../store/configureStore";
import UnitDetailContainer from 'containers/unit/UnitDetailContainer';
import { branchDataAction, branchUnitSelectAction } from 'actions/branch';
import { unitItemTableData, unitStatisticAction, unitTableDataAction } from 'actions/unit';


const UnitDetail: NextPage = () => {
  return <UnitDetailContainer/>
}
export const getServerSideProps: GetServerSideProps  = wrapper.getServerSideProps((store) => async (context) => {
  try {
    const branchId: string = context.query.id?.toString() !== undefined ?  context.query.id.toString() : '1'

    await store.dispatch(branchUnitSelectAction())
    await store.dispatch(unitStatisticAction(branchId))
    await store.dispatch(unitTableDataAction(branchId))
    await store.dispatch(unitItemTableData(branchId))
    

    return {
      props: {
        
      }
    }
  } catch (e) {
    return {props: {}}
  }
})

export default UnitDetail

