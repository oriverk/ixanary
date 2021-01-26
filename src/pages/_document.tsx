import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// @ts-ignore
import tailwindcss from '!raw-loader!../style/tailwind.css';
// @ts-ignore
import postcss from '!raw-loader!../style/bundle.css'
const cssFile = process.env.NODE_ENV === 'development' ? tailwindcss : postcss;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage((App) => (props) => <App {...props} />)
    const initialProps: any = await Document.getInitialProps(ctx)
    // return { ...initialProps }
    return {
      ...page,
      styles: [
        ...initialProps.styles,
        <style
          key='custom'
          dangerouslySetInnerHTML={{
            __html: cssFile
          }}
        />,
      ]
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className='bg-gray-50 dark:bg-gray-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument