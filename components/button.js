import Link from 'next/link'
import btnCss from './button.module.scss'

export default function Button(props) {
  return (
    <Link href={props.link}>
      <a className={btnCss.btn}>
        {props.text}
        <span>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z" fill="white"/>
          </svg>
        </span>
      </a>
    </Link>
  )
}
