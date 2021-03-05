import styles from '../styles/style.module.scss'

export default function DashboardDisplay() {
  return (
    <section>
      <div className={`${styles.dashcontent} ${styles.container}`}>

        <div className={styles.contentimg}>
          <img src='/Frame1.png' alt='frame one' />
        </div>

        <div className={styles.contenttext_r}>
          <h4>Bring your team up to speed</h4>
          <p>Collaborate on project from start to finish, see information at a glance, add comment, attachment and more with Oneburner.</p>
        </div>
      </div>

      <div className={`${styles.dashcontent} ${styles.container}`}>

        <div className={styles.contenttext_l}>
          <h4>Automated task timeline</h4>
          <p>View dates, projects, calendar, sprint and more with reliability.</p>
        </div>

        <div className={styles.contentimg}>
          <img src='/frame2.png' alt='frame two' />
        </div>

      </div>
    </section>
  )
}