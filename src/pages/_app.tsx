import { AppProps } from 'next/app'

export function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}