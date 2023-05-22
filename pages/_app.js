import Header from "../components/header";
import Layout from "../components/layout";
import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Noon Gallery</title>
        <meta content="Noon Gallery" name="Description" />
        <meta content="website" property="og:type" />
        <meta content="Noon Gallery" property="og:title" />
        <meta
          content="https://www.noon-gallery.netlify.app"
          property="og:url"
        />
        <meta
          content="Noon Gallery"
          property="og:image:alt"
        />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
