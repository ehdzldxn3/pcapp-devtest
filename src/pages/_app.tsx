import type { AppProps } from 'next/app';
import wrapper from '../store/configureStore';
import '../styles/globals.css'
import Nav from 'components/nav/nav';
import Header from 'components/header/Header';


const App = ({ Component, pageProps}: AppProps) => {
  return (
      <>
        <Header />
        <div className={`content`}>
          <Nav/>
          <Component {...pageProps}/>
        </div>
      </>
  )
}
export default wrapper.withRedux(App);



