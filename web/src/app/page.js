
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import styles from './page.module.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header><br/>
      <Main></Main><br/>
      <Footer></Footer>
    </main>
  )
}
