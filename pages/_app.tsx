import { AppProps } from 'next/app'
import '../styles/app.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
