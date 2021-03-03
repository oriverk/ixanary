import { AppProps } from 'next/app'

import { ThemeProvider } from '../hooks/useTheme'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}