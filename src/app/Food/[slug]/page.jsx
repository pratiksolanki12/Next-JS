"use client"
import style from '../../page.module.css'
import { useParams,useRouter } from 'next/navigation'
import Link from "next/link"
import './slug.css'

function page() {
  const { slug } = useParams();
  const router = useRouter();
  return (
    <div className={style.page}>
        <h1>Dynamic Routing</h1>
        <h4>Food shop Name :{slug}</h4>
        <button onClick={()=>{router.push("/Food")}}>back</button>
    </div>
  )
}

export default page