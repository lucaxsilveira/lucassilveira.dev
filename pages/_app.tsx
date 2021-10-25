import { AppProps } from 'next/app'
import GlobalContext from '../hooks'
import '../styles/app.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalContext>
      {' '}
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
