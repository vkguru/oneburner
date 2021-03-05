import Head from 'next/head'

export default function Header({siteTitle}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon-precomposed" href="/logo.png" />
        <meta name="msapplication-TileImage" href="/logo.png" />
        <meta name="description" content="Communicate effectively with Oneburner for easy collaboration, team work and remote work." />
        <meta name="keywords" content="Communication, Oneburner, easy collaboration, team work, remote work"></meta>
        <meta
          property="og:image"
          content="/logo.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
    </>
  )
}