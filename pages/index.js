import Head from 'next/head'
import WhyKaya from '../Components/Landing/WhyKaya'
import KayaCapital from '../Components/Landing/KayaCapital'
import AboutKaya from '../Components/Landing/AboutKaya'
import Faqs from '../Components/Landing/Faqs'
import Contact from '../Components/Landing/Contact'
import Footer from '../Components/Footer/Footer'
import Sponsor from '../Components/Landing/Sponsor'


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
        <Faqs />  
        <Contact />
        <Sponsor />
        <Footer />
      </div>
     
    </div>
  )
}
