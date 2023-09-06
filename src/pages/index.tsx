import { menuGetAction } from "actions/menu";
import HomeContainer from "containers/home/HomeContainer";
import {NextPage} from 'next'
import wrapper from "../store/configureStore";


const Home: NextPage = () => {
  return <HomeContainer/>
}
export const getServerSideProps = wrapper.getServerSideProps((store) => async ({req, res, context, ...etc}: any) => {
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

