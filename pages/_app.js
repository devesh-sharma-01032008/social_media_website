
import Header from '../components/Header';
import '../styles/globals.css'
import '../styles/utils.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (<>
      <Header website_name={"JNV Media"} />
      <Component {...pageProps} />
  </>);
}

export default MyApp
