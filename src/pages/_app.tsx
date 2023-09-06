import type { AppProps } from 'next/app';
import wrapper from '../store/configureStore';
import '../styles/globals.css'


const App = ({ Component, pageProps}: AppProps) => {
  return (
    
    <Component {...pageProps}/>
  )
}

// App.prototype = {
//   Component: PropTypes.elementType,
//   store: Proptypes.object,
// }

export default wrapper.withRedux(App);



