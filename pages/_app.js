import Head from 'next/head'
import '../styles/globals.css'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DiverseHQ</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <NextSeo
        title="DiverseHQ"
        description="We believe access and reach is not just famous few, but for everyone. Join us in our mission to democratize to give power back to you."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://diversehq.xyz',
          site_name: 'DiverseHQ',
          images: [
            {
              url: 'https://diversehq.xyz/vector-bg.png',
              width: 1200,
              height: 630,
              alt: 'DiverseHQ'
            }
          ]
        }}
        twitter={{
          handle: '@useDiverseHQ',
          cardType: 'summary_large_image'
        }}
      />
      <div className="text-black">
        <Component {...pageProps} />
      </div>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
