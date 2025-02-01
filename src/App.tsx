import './App.css'
import Hero from '../components/Hero'
import Summarise from '../components/Summarise'


function App() {

  return (
    <>
      <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero/>
        <Summarise/>
        {/* <Demo /> */}
      </div>
    </main>
    </>
  )
}

export default App
