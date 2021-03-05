import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/style.module.scss'

export default function Contact() {
  return (
    <>
      <Header siteTitle = 'Contact | Oneburner' />
      <Nav />
      <section className={styles.grey}>
        <div className={`${styles.contact} ${styles.container}`}>

          <form className={styles.contactForm}>

            <div className={styles.formgroup_h}>
              <label>Last Name</label>
              <input type='text' className={styles.input} />
            </div>

            <div className={styles.formgroup_h}>
              <label>First Name</label>
              <input type='text' className={styles.input} />
            </div>

            <div className={styles.formgroup_f}>
              <label>Work Email</label>
              <input type='email' className={styles.input} />
            </div>

            <div className={styles.formgroup_f}>
              <label>Phone Number</label>
              <span>
                  <svg width="25" height="25" viewBox="0 0 45 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.547119 0.334717H44.9999V25.3815H0.547119V0.334717Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.1674 0.334717H44.9999V25.3815H30.1674V0.334717ZM0.547119 0.334717H15.35V25.3815H0.547119V0.334717Z" fill="#25A78E"/>
                  </svg>

                  <svg width="8" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41 0.477539L6 4.66492L10.59 0.477539L12 1.76667L6 7.25232L0 1.76667L1.41 0.477539Z" fill="#333333"/>
                  </svg>

              </span>
              <input type='tel' className={`${styles.input} ${styles.tel}`} />
            </div>

            <div className={styles.formgroup_f}>
              <label>Product of Interest</label>
              <select className={styles.input} id={styles.select}>
                <option>Select an option</option>
                <option>Enterprise</option>
                <option>Enterprise</option>
                <option>Enterprise</option>
              </select>
            </div>

            <div className={styles.formgroup_h}>
              <label>Company Name</label>
              <input type='text' className={styles.input} />
            </div>

            <div className={styles.formgroup_h}>
              <label>Company Size</label>
              <select className={styles.input} id={styles.select}>
                <option>Select an option</option>
              </select>
            </div>

            <div className={styles.formgroup_f}>
              <label>How can our expert help you?</label>
              <textarea cols='10' rows='5' className={styles.input} />
            </div>

            <div className={`${styles.formgroup_f} ${styles.mr}`}>
              <input type="submit" value="Contact Us" className={styles.cBtn} />
            </div>

          </form>

          <div className={styles.contactText}>
            <div className={styles.textintro}>
              <h4>Request a call from an expert</h4>
              <p>Having thoughts on which product works best for you?  Fill the form and our expert will reach out to you.</p>
            </div>

            <div className={styles.textdta}>
              <h4>Our offices around Africa </h4>

              <div className={styles.row}>
                <div className={styles.loc}>
                  <p className={styles.country}>Nigeria</p>
                  <p>
                  33a, Adeola Odeku, Victoria 
                  <span>Island, Lagos.</span>
                  <span>+234-(0)-8000000000</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>Ghana</p>
                  <p>
                  45, El-Senoussi Street
                  <span>Accra.</span>
                  <span>+233-(0)-277619819</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>South Africa</p>
                  <p>
                  45, El-Senoussi Street
                  <span>Accra.</span>
                  <span>+233-(0)-277619819</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>Egypt</p>
                  <p>
                  72, Gameat El-Dewal El-Arabia St.
                  <span>Giza.</span>
                  <span>+20-(0)-35924295</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>Kenya</p>
                  <p>
                  41, Enterprise Rd., Industrial Area
                  <span>Niarobi</span>
                  <span>+254-(0)-20536766</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>Tunisia</p>
                  <p>
                  13, Rue de Makthar, Dhraa
                  <span>Governorate Kasserine</span>
                  <span>+216-(0)-77367410</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>Mali</p>
                  <p>
                  22, Badalabougou Est.,
                  <span>Bamako.</span>
                  <span>+223-(0)-78175387</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>TANZANIA</p>
                  <p>
                  Mbezi Beach, P.O.B: 70339,
                  <span>Dar Salaam</span>
                  <span>+255-(0)-222120119</span>
                  </p>
                </div>

                <div className={styles.loc}>
                  <p className={styles.country}>togo</p>
                  <p>
                  10, E rue des Echis,
                  <span>Lome</span>
                  <span>+228-(0)-22229600</span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        
      </section>
      <Footer />
    </>
  )
}