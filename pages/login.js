import Header from '../components/header'
import Nav from '../components/navLogin'
import LoginForm from '../components/login'

export default function Login() {
  return (
    <>
      <Header siteTitle = 'Login | Oneburner' />
      <Nav />
      <LoginForm />
    </>
  )
}