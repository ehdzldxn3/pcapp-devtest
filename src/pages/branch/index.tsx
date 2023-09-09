import { GetServerSideProps, NextPage } from 'next';
import { branchDataAction, branchStatisticAction } from 'actions/branch';
import wrapper from 'store/configureStore';
import BranchContainer from 'containers/branch/BranchContainer';




const Branch: NextPage = () => {
    return <BranchContainer/>
}

export default Branch;


export const getServerSideProps: GetServerSideProps  = wrapper.getServerSideProps((store) => async (context) => {
    try {
  
      await store.dispatch(branchStatisticAction())
      await store.dispatch(branchDataAction())

      return {
        props: {
          
        }
      }
    } catch (e) {
      return {props: {}}
    }
  })
  
  
  
  