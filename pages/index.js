import Head from 'next/head'
import Nav from '../components/Nav'
import Container from '../components/Container'
import Form from '../components/Form'
import { useState } from 'react'


export default function Home() {

  const [tareas, setTareas] = useState('')
  const [description, setDescription] = useState('')
  const [listado, setListado] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
     if(!tareas) return alert('Por favor, ingrese una tarea')

    const nuevaTarea = {
      id: Date.now(),
      tareas: tareas,
      description: description,
      completed: false
  }
  const temp = [nuevaTarea, ...listado]
  setListado(temp)
  setTareas('')
  setDescription('')

}
  function handleChange(e) {
    setTareas(e.target.value)
    console.log(tareas)

  }
  function handleDescription(e) {
    setDescription(e.target.value)
    console.log(description)
  }
  function borrarTarea(id) {
    const temp = listado.filter((tarea) => tarea.id !== id)
    setListado(temp)
  }
    
  
  return (
    <div >
      <Head>
        <title>To do App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>
  
    <main className='bg-[#9a67ea] flex flex-col min-h-screen'>
      <div>
        <Nav />
      </div>
      <div className="flex justify-center md:flex-row md:justify-evenly flex-col py-2">
      <div className='py-10'>
  
        <Form description={description} handleDescription={handleDescription} tareas={tareas} handleSubmit={handleSubmit} handleChange={handleChange} />
  
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 self-center">
       {
          listado.map((tarea) => {
            return (
              <div key={tarea.id} className='py-2'>
              <Container  id={tarea.id} tarea={tarea} borrarTarea={borrarTarea} />
              </div>
            )
          })
       }
      </div>
        </div>
      </main>
     
    </div>
  )
}
