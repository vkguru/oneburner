import styles from '../styles/style.module.scss'

export default function Features() {

  return (
    <section>
      <div className={`${styles.tabrow} ${styles.container}`}>
        <div className={styles.tab}>
          <ul>
            <li className={styles.active}>CRM {'&'} Sales</li>
            <li>Human Resources</li>
            <li>Marketing</li>
            <li>Remote Work</li>
            <li>Project Management</li>
            <li>Social Media</li>
          </ul>
        </div>

        <div className={styles.tabcontent}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h3>Manage team activities all in one place</h3>
              <p>Keep your team organized and informed with activities that are up to date.</p>
            </div>
            <div className={styles.vid}>
              <img src='/video_home.png' alt='video' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}