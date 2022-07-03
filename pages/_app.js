import Head from 'next/head'
import '../styles/globals.css'
import {NextSeo} from 'next-seo'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>DiverseHQ</title>
  </Head>
  <NextSeo 
  title="DiverseHQ"
  description='Join communities, express your creativity, and get noticed for your work!'
  openGraph={{
    type: 'website',
    locale: 'en_US',
    url: 'https://diversehq.xyz',
    site_name: 'DiverseHQ',
    images: [
      {
        url: 'https://diversehq.xyz/images/vector-bg.png',
        width: 1200,
        height: 630,
        alt: 'DiverseHQ',
      },
    ],
  }}
  twitter={{
    handle: '@useDiverseHQ',
    cardType: 'summary_large_image',
  }}
  />
  <div className="text-black">
  <Component {...pageProps} />
  </div>
  </> 
}

export default MyApp
