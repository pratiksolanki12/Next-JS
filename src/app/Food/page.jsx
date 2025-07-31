import Link from "next/link";
import style from '../page.module.css'
import './Food.css'

function Flight() {
  return (
    <div className={style.page}>
        <h1> food cafe</h1>
        <div className="nav-link-Flight">
        <Link className="button" href="/Food/pizahut">pizahut</Link>

        <Link  className="button" href="/Food/3PM">3PM</Link>

        <Link  className="button" href="/Food/369">369</Link>
        </div>
    </div>
  )
}

export default Flight