import type { AppProps } from 'next/app';
import PropTypes from "prop-types";
import wrapper from '../store/configureStore';
import Proptypes from 'prop-types';
import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, pageProps}: AppProps) => {
  return (
    <Component {...pageProps}/>
  )
}

App.prototype = {
  Component: PropTypes.elementType,
  store: Proptypes.object,
}

export default wrapper.withRedux(App)