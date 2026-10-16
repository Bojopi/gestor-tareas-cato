import './App.css'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'

function App() {

  //COMPLETAR LOS ESTILOS CON TAILWIND PARA EL HEADER Y PARA EL FOOTER (LIBRE)
  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <Header />
        <main className='max-w-4xl mx-auto px-6 py-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Mis tareas</h2>
          <TaskCard 
          nombre_materia= "IHC"
          docente= "Bryana Ojopi"
          fecha= "02/10/2026"
          estado= "Finalizado" />
          <TaskCard
          nombre_materia= "Calculo II"
          docente= "Juan Pérez"
          fecha= "15/10/2026"
          estado= "En progreso" />
          <TaskCard 
          nombre_materia= "Programacion Orientada a Objetos"
          docente= "María García"
          fecha= "20/10/2026"
          estado= "Pendiente" />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
