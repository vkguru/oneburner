import Image from 'next/image'
import Link from 'next/link'
import navStyles from '../styles/style.module.scss'

export default function Nav() {
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

          </div>

          <div className={navStyles.menuright}>

            <ul>
                <li>
                  <Link href="/">
                    <a>New Customer?</a>
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
    </>
  )
}