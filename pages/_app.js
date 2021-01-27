import '../styles/globals.css'
import Header from '../pages/components/layout/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
