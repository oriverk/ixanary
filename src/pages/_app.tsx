import { AppProps } from 'next/app'

import { ThemeProvider } from '../hooks/useTheme'
import { SidebarProvider } from '../hooks/useSidebar'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ThemeProvider>
  )
}