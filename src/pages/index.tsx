import { branchStatisticAction, branchDataAction } from "actions/branch";
import HomeContainer from "containers/home/HomeContainer";
import {GetServerSideProps, NextPage} from 'next'
import wrapper from "../store/configureStore";


const Home: NextPage = () => {
  return <HomeContainer/>
}
export const getServerSideProps: GetServerSideProps  = wrapper.getServerSideProps((store) => async (context) => {
  try {
    
    await store.dispatch(branchStatisticAction())
    await store.dispatch(branchDataAction())

    if(context.req.url === '/') {
      return {
        redirect: {
          permanent: false,
          destination: '/branch'
        }
      }
    }
      

    return {
      props: {
        
      }
    }
  } catch (e) {
    return {props: {}}
  }
})

export default Home

