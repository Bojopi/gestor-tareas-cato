import { useState } from "react"

function TaskCard({
    nombre_materia,
    docente,
    fecha,
    estado
}) {
    //uso de useState
    const [estadoActual, setEstadoActual] = useState(estado)
    function completarActividad() {
        setEstadoActual("Completado")
        //ESTADO: la informacion que puede cambiar mientras el usuario usa la app
        //este afecta a lo que se muestra en pantalla
    }

    function pasarPendiente() {
        setEstadoActual("Pendiente")
    }
    
    //ESTABLECER UNA UNICA FUNCION PARA VALIDAR Y CAMBIAR LOS ESTADOS UTILIZANDO:
    //SWITCH/CASE
    //Estados a trabajar: Pendiente, En progreso, En pausa y Completado
    //ESTABLECER LOS USESTATES PARA TODOS LOS PROPS QUE SE RECIBEN
    //AGREGAR LA INFORMACION DE LA TAREA CON SU DESCRIPCION
    return(
        <div className="p-5 m-3 border-2 rounded-lg bg-white">
            <h3>{nombre_materia}</h3>
            <p>{docente}</p>
            <p>Fecha: {fecha}</p>
            <p>Estado: {estadoActual}</p>
            {
                estadoActual != "Completado" && (
                    <button 
                    className="rounded-xl bg-green-400 text-white px-3 py-1" 
                    onClick={completarActividad}>Completar actividad</button>
                )
            }
            {
                estadoActual == "Completado" && (
                    <button onClick={pasarPendiente}>Pasar a Pendiente</button>
                )
            }
        </div>
    )
}

export default TaskCard