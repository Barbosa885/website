import '../styles/globals.css'
import type { AppProps } from 'next/app'
import WindowsProvider from '../contexts/windows'

function MyApp({ Component, pageProps }: AppProps) {

  return <WindowsProvider>
    <Component {...pageProps} />
  </WindowsProvider>
}

export default MyApp
