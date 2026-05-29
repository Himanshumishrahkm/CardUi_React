
import Left from './left/Left.jsx'
import Right from './right/Right.jsx'

const Section2 = (props) => {
  return (
    <>
        <div className='h-screen  flex w-screen gap-3.5'>
        <Left/>
        <Right jobs = {props.jobs}/>
        </div>
    </>
  )
}

export default Section2
