import './App.css'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Header />
        <main>
          <h2>Mis tareas</h2>
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
