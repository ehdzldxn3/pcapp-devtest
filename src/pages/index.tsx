import { menuGetAction } from "actions/menu";
import HomeContainer from "containers/home/HomeContainer";
import {GetServerSideProps, NextPage} from 'next'
import wrapper from "../store/configureStore";


const Home: NextPage = () => {
  return <HomeContainer/>
}
export const getServerSideProps: GetServerSideProps  = wrapper.getServerSideProps((store) => async (context) => {
  try {

    await store.dispatch(menuGetAction())

    return {
      props: {
        
      }
    }
  } catch (e) {
    return {props: {}}
  }
})

export default Home

