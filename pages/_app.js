import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{`BAXE - The world’s most innovative digital gateway platform.`}</title>
        <link rel="icon" href="/favicon.ico/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon.ico/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon.ico/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon.ico/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon.ico/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon.ico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico/favicon-16x16.png" />
        <link rel="manifest" href="/favicon.ico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon.ico/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <meta property="og:image" content="https://res.cloudinary.com/telecreativenow/image/upload/v1600755556/Bloom%20Studio/video.jpg" /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://baxe.com" />
        <meta property="og:title" content="BAXE - The world’s most innovative digital gateway platform." />
        <meta property="og:description" content="BAXE is more than just a digital currency. It’s the gateway between traditional financial systems and the emerging digital economy."
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
