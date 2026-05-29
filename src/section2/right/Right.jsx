import 'remixicon/fonts/remixicon.css'
import  './Right.css'
const Right = ({jobs}) => {
  return (



    <div className='scrollbar-hide  h-full w-screen p-4 flex gap-2.5 overflow-x-auto '>
      {jobs.map((job,index)=>{
        return (
        <div key = {index} className='relative h-186  w-1/3 rounded-2xl overflow-hidden  flex flex-col justify-between  flex-shrink-0 '>
        <img className=' absolute inset-0 w-full h-full object-cover ' src= {job.image} alt="img" />
        <div className="h-17 w-17 relative top-10 left-10 z-10 bg-white rounded-full flex items-center justify-center">
          
          <h1 className="text-black text-5xl font-bold">
            {index+1}
          </h1>

        </div>

        <div className="relative p-4 flex flex-col gap-4">
          <p className=" text-white text-[20px]"> {job.description}</p>
          <div className='flex justify-between'>
          <button style={{backgroundColor : job.color}} className=" w-40 h-14  text-white rounded-4xl uppercase">{job.buttonText}</button>
          <div style={{backgroundColor : job.color}} className='w-14 h-14  text-white text-5xl rounded-full flex items-center justify-center'>
          <i className="ri-arrow-right-up-line"></i>
          </div>
          </div>
        </div>
      </div>
        )

      })}
      



     
 
      
    </div>
  )
}

export default Right
