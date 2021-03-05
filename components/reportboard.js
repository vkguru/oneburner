import styles from '../styles/style.module.scss'

export default function ReportBoard() {
  return (
    <section>
      <div className={`${styles.dashcontent} ${styles.container}`}>

        <div className={styles.contentimg}>
          <img src='/report-board.png' alt='report_board' />
        </div>

        <div className={styles.contenttext_r}>
          <h4>Timeless report generator</h4>
          <p>You can generate quick report of activities of all that has to do with the daily running of your business and teams.</p>
        </div>
      </div>

      <div className={`${styles.dashcontent} ${styles.container}`}>

        <div className={styles.contenttext_l}>
          <h4>Efficient lead management</h4>
          <p>Track and manage prospective customers. Manage their notes, emails, meetings, calls, contacts, and files.</p>
        </div>

        <div className={styles.contentimg}>
          <img src='/report_board_next.png' alt='report_board' />
        </div>

      </div>

      <div className={`${styles.supportcontent} ${styles.container}`}>

        <div className={styles.supportimg}>
          <img src='/support.png' alt='customer support' />
        </div>

        <div className={styles.supporttext_r}>
          <h4>24/7 customer support</h4>
          <p>Our team of responsible member is always available to help you all day long and ready to meet your demand. Reach out to us and we will always be there.</p>
        </div>
      </div>

    </section>
  )
}