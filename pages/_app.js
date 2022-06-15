
import Header from '../components/Header';
import '../styles/globals.css'
import '../styles/utils.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Header website_name={"JNV Panipat"} />
    <Component {...pageProps} />
  </>);
}

export default MyApp
