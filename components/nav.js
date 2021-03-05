import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import navStyles from '../styles/style.module.scss'

export default function Nav() {

  const [hover, setHover] = useState(false);
  const [mobile, setMobile] = useState(false);

  const hoverMenu = () => {
    setHover(!hover)
  }

  const open = () => {
    setMobile(!mobile);
  }
  

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.navrow}>

          <div className={navStyles.navlogo}>
            <Link href="/">
              <a>
                <Image src="/logo.png" width={231} height={97} loading="eager" alt="oneburner" />
              </a>
            </Link>
          </div>

          <div className={navStyles.menuleft}>
            <ul>
              <li>
                <Link href="/">
                  <a onClick={hoverMenu}>
                    Product
                    <span>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.41 7.84009L12 12.4201L16.59 7.84009L18 9.25009L12 15.2501L6 9.25009L7.41 7.84009Z" fill="#111111"/>
                      </svg>
                    </span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <a>Pricing</a>
                </Link>
              </li>

              <li>
                <Link href="/enterprise">
                  <a>Enterprise</a>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <a>Support</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={navStyles.menuright}>

            <ul>
                <li>
                  <Link href="/contact">
                    <a>Contact Sales</a>
                  </Link>
                </li>

                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>

                <li>
                  <Link href="/">
                    <a id={navStyles.cta}>
                      Try For Free
                        <span>
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z" fill="white"/>
                          </svg>
                        </span>
                    </a>
                  </Link>
                </li>
            </ul>

          </div>
        </div>
      </nav>

      {hover === true?
      <div className={navStyles.sub}>
        <div className={navStyles.submenu}>
          <div className={navStyles.menu}>
            <p className={navStyles.title}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 5V2C7 1.73478 7.10536 1.48043 7.29289 1.29289C7.48043 1.10536 7.73478 1 8 1H16C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z" fill="#462686"/>
                </svg>
              </span>
              Clients
            </p>
            <p>See the amazing team that uses Oneburner.</p>
          </div>

          <div className={navStyles.menu}>
            <p className={navStyles.title}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 13.242V20H22V22H2V20H3V13.242C2.38437 12.8311 1.87971 12.2745 1.53082 11.6218C1.18193 10.969 0.999592 10.2402 1 9.5C1 8.673 1.224 7.876 1.633 7.197L4.345 2.5C4.43277 2.34798 4.559 2.22175 4.71101 2.13398C4.86303 2.04621 5.03547 2 5.211 2H18.79C18.9655 2 19.138 2.04621 19.29 2.13398C19.442 2.22175 19.5682 2.34798 19.656 2.5L22.358 7.182C22.9546 8.17287 23.1463 9.35553 22.8934 10.4841C22.6405 11.6127 21.9624 12.6005 21 13.242ZM19 13.972C18.3124 14.0491 17.6163 13.9665 16.9659 13.7307C16.3155 13.4948 15.7283 13.1119 15.25 12.612C14.8302 13.0511 14.3258 13.4005 13.7672 13.6393C13.2086 13.878 12.6075 14.001 12 14.001C11.3927 14.0013 10.7916 13.8786 10.233 13.6402C9.67445 13.4018 9.16996 13.0527 8.75 12.614C8.27163 13.1138 7.68437 13.4964 7.03395 13.7321C6.38353 13.9678 5.68749 14.0503 5 13.973V20H19V13.973V13.972ZM5.789 4L3.356 8.213C3.11958 8.79714 3.11248 9.44903 3.33613 10.0382C3.55978 10.6273 3.99768 11.1103 4.56218 11.3904C5.12668 11.6705 5.77614 11.7271 6.38058 11.5488C6.98502 11.3706 7.49984 10.9706 7.822 10.429C8.157 9.592 9.342 9.592 9.678 10.429C9.8633 10.8934 10.1836 11.2916 10.5975 11.5721C11.0115 11.8526 11.5 12.0025 12 12.0025C12.5 12.0025 12.9885 11.8526 13.4025 11.5721C13.8164 11.2916 14.1367 10.8934 14.322 10.429C14.657 9.592 15.842 9.592 16.178 10.429C16.3078 10.7484 16.5022 11.0376 16.7491 11.2783C16.996 11.519 17.2901 11.706 17.6127 11.8275C17.9354 11.9491 18.2797 12.0026 18.6241 11.9847C18.9684 11.9668 19.3053 11.8778 19.6136 11.7234C19.9219 11.569 20.1949 11.3525 20.4155 11.0875C20.6361 10.8225 20.7995 10.5148 20.8955 10.1836C20.9914 9.85238 21.0178 9.50493 20.973 9.16305C20.9281 8.82118 20.8131 8.49227 20.635 8.197L18.21 4H5.79H5.789Z" fill="#462686"/>
                </svg>
              </span>
              Oneburner Stores
            </p>
            <p>Explore our ready made solutions to expand your business.</p>
          </div>

          <div className={navStyles.menu}>
            <p className={navStyles.title}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 18V20H19V22H13C12.4696 22 11.9609 21.7893 11.5858 21.4142C11.2107 21.0391 11 20.5304 11 20V18H8C6.93913 18 5.92172 17.5786 5.17157 16.8284C4.42143 16.0783 4 15.0609 4 14V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H8V2H10V6H14V2H16V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18H13ZM8 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V11H6V14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16ZM18 8H6V9H18V8ZM12 14.5C11.7348 14.5 11.4804 14.3946 11.2929 14.2071C11.1054 14.0196 11 13.7652 11 13.5C11 13.2348 11.1054 12.9804 11.2929 12.7929C11.4804 12.6054 11.7348 12.5 12 12.5C12.2652 12.5 12.5196 12.6054 12.7071 12.7929C12.8946 12.9804 13 13.2348 13 13.5C13 13.7652 12.8946 14.0196 12.7071 14.2071C12.5196 14.3946 12.2652 14.5 12 14.5Z" fill="#462686"/>
                </svg>
              </span>
              Integrations
            </p>
            <p>Connect different solution to Oneburner and get more done.</p>
          </div>

          <div className={navStyles.menu}>
            <p className={navStyles.title}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V15H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22ZM18 17V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V17H18ZM16 20V4H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z" fill="#462686"/>
                </svg>
              </span>
              Why Oneburner?
            </p>
            <p>Learn more about our features, success rates, benefits and demo.</p>
          </div>
        </div>
      </div>
      :
      ''
      }

      <nav className={navStyles.navbar_m}>
        <div className={navStyles.logo_m}>
          <Link href='/'>
            <a>
              <img src='logo.png' alt='oneburner logo' />
            </a>
          </Link>
        </div>

        <div className={navStyles.bar_m}>
          <div className={navStyles.ham} onClick={() => open()}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {mobile === true? 
            <div className={navStyles.mmenu}>
              <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/enterprise"><a>Enterprise</a></Link></li>
                <li><Link href="/contact"><a>Contact Us</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
              </ul>
            </div>
            :
            ''
          }
      </nav>
    </>
  )
}