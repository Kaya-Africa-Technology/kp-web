import Head from 'next/head'
import WhyKaya from '../Components/Landing/WhyKaya'
import KayaCapital from '../Components/Landing/KayaCapital'
import AboutKaya from '../Components/Landing/AboutKaya'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <WhyKaya />
        <KayaCapital />
        <AboutKaya />
      </div>
     
    </div>
  )
}
