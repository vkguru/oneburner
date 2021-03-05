import Header from '../components/header'
import Nav from '../components/nav'
import Hero from '../components/enterprise_hero'
import Brands from '../components/brands'
import EHow from '../components/e_how'
import Integrate from '../components/integrate'
import Region from '../components/region'
import Testimony from '../components/testimony'
import PushC from '../components/pushc'
import Footer from '../components/footer'

export default function Enterprise() {
  return (
    <>
      <Header siteTitle = 'Enterprise | Oneburner' />
      <Nav />
      <Hero />
      <Brands />
      <EHow />
      <Integrate />
      <Region />
      <Testimony />
      <PushC />
      <Footer />
    </>
  )
}