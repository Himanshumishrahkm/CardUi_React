import React from 'react'
import Left from './left/Left.jsx'
import Right from './right/Right.jsx'

const Section2 = () => {
  return (
    <>
        <div className='h-screen  flex w-screen gap-3.5'>
        <Left/>
        <Right/>
        </div>
    </>
  )
}

export default Section2
