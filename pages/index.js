import Header from '../components/header'
import Nav from '../components/nav'
import HeroHome from '../components/heroHome'
import Brands from '../components/brands'
import Features from '../components/features'
import Dashboard from '../components/dashboadDisplay'
import Integrate from '../components/integrate'
import ReportBoard from '../components/reportboard'
import Call from '../components/call'
import Footer from '../components/footer'


export default function Home() {
  return (
    <>
      <Header siteTitle = 'Oneburner | Effective Communication with Oneburner' />
      <Nav />
      <HeroHome />
      <Brands />
      <Features />
      <Dashboard />
      <Integrate />
      <ReportBoard />
      <Call />
      <Footer />
    </>
  )
}
