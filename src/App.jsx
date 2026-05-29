import Section1 from './section1/Section1.jsx'
import Section2 from './section2/Section2.jsx'
import './App.css'

function App(props) {
  

  return (
    <div className=' w-full h-full'>
      <Section1/>
      <Section2 jobs = {props.jobs}/>
    
    </div>
  )
}

export default App
