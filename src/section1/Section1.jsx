
import Left from './left/Left.jsx'
import Right from './right/Right.jsx';
const Section1 = () => {
  return (
    <>
    <div className=" h-15 p-3.5 pl-8  rounded-2xl">
      <nav className='flex justify-between items-center h-full '>
        <Left />
        <Right />
      </nav>
    </div>
    </>
  )
}

export default Section1
