import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import ixanary from '../../ixanary.config'

// @ts-ignore
import buildCss from '!raw-loader!../style/bundle.css'
const cssFile = buildCss

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />)
    const initialProps: any = await Document.getInitialProps(ctx)
    return {
      ...page,
      styles: [
        ...initialProps.styles,
        <style
          key='custom'
          dangerouslySetInnerHTML={{
            __html: cssFile
          }}
        />
      ]
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='format-detection' content='email=no,telephone=no,address=no' />
          <meta name='theme-color' content={ixanary.themeColor} />
          <meta content='developer, react, nextjs, typescript' name='keywords' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={ixanary.baseName} />
          <meta content='summary_large_image' name='twitter:card' />
          {/* <meta content={ixanary.sns.twitter} name='twitter:site' /> */}
          <link rel='icon' type='image/png' sizes='30x30' href='/assets/favicon/ha.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/icon180.jpg' />
          <link rel='manifest' crossOrigin='use-credentials' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument