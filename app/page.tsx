import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Awesome Next 13 🔥</h1>
      <img
        className={styles.logo}
        src='https://i.ytimg.com/vi/K_BYvkRvb58/maxresdefault.jpg'>
          
      </img>
    </main>
  )
}
