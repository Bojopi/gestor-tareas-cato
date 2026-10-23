import { useState } from "react"

function ActivityForm() {
  const [form, setForm] = useState({
    nombre_materia: '',
    docente: '',
    tarea: '',
    fecha: '',
    estado: 'Inactivo'
  })

  function changeForm(event) {
    const {key, value} = event.target

    setForm({
      ...form,
      [key]: value
    })
  }

  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Nueva tarea</h2>
      <div>
        <label htmlFor="materia">Nombre materia</label>
        <input id="materia" type="text" value={form.nombre_materia}
        onChange={ changeForm }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        <label htmlFor="docente">Nombre docente</label>
        <input id="docente" type="text" value={form.docente}
        onChange={ changeForm }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        <label htmlFor="tarea">Descripcion de la tarea</label>
        <input id="tarea" type="text" value={form.tarea}
        onChange={ changeForm }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        <label htmlFor="fecha">Fecha</label>
        <input id="fecha" type="date" value={form.fecha}
        onChange={ changeForm }
        className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        <label htmlFor="estado">Estado</label>
        <select id="estado" onChange={ changeForm } value={form.estado}>
          <option value="1">Inactivo</option>
          <option value="2">Pendiente</option>
          <option value="3">En proceso</option>
          <option value="4">Completado</option>
        </select>
      </div>
    </section>
  )
}

export default ActivityForm