import Head from 'next/head'

import ixanary from '../../../ixanary.config'

type Props = {
  noindex?: boolean,
  pageUrl?: string,
  pageTitle?: string,
  pageDescription?: string,
  pageImage?: string
}

export const CustomHead: React.FC<Props> = ({
  children,
  noindex = false,
  pageUrl,
  pageTitle,
  pageDescription,
  pageImage,
}) => {
  const ogImage = pageImage ? ixanary.baseUrl + pageImage : ixanary.baseUrl + ixanary.ogImage
  return (
    <Head>
      { noindex && ( <meta name="robots" content="noindex" /> )}
      <title>{`${pageTitle} | ${ixanary.shortName}`}</title>
      <meta name='title' content={`${pageTitle} | ${ixanary.baseName}`} />
      <meta name='description' content={pageDescription || ixanary.desc} />
      <meta property='og:title' content={`${pageTitle} | ${ixanary.baseName}`} />
      <meta property='og:description' content={pageDescription || ixanary.desc} />
      <meta property='og:locale' content='ja-JP' />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content={`${ixanary.baseUrl}${pageUrl}`} />
      {children}
    </Head>
  )
}