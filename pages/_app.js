
// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head';
import Navigation from '../components/navigation/navigation.component.js';

function MyApp({ Component, pageProps }) {
  
  return <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
    <Navigation component={Component}/>
    <Component {...pageProps} />

  </>
}

export default MyApp
