
import Header from '../components/Header';
import '../styles/globals.css'
import '../styles/utils.css'
import '../styles/responsive.css'
import authContext from '../context/auth/authContext';
import { useContext, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const state = useContext(authContext)
  useEffect(() => {
    console.log(state);
    console.log(authContext);
  }, [])
  
  return (<>
      <Header website_name={"Instagram"} />
      <Component {...pageProps} />
  </>);
}

export default MyApp
