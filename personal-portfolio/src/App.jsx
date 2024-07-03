
import styles from './App.module.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contacts from "./components/Contacts/Contacts"

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
