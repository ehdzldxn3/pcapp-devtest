import { menuGetAction } from "actions/menu";
import HomeContainer from "containers/home/HomeContainer";
import {GetServerSideProps, NextPage} from 'next'
import wrapper from "../store/configureStore";


const Home: NextPage = () => {
  return <HomeContainer/>
}
export const getServerSideProps: GetServerSideProps  = wrapper.getServerSideProps((store) => async (context) => {
  try {

    // 메뉴 가져오기
    await store.dispatch(menuGetAction())

    // 창고 통계 가져오기
    // await store.dispatch(())

    return {
      props: {
        
      }
    }
  } catch (e) {
    return {props: {}}
  }
})

export default Home

