import React from 'react'

const Title = ({ title }) => {
  return (
    <>
      <div className='
      grid
      items-center
      '>
        <h1 className='
        text-5xl
        l_screen:text-4xl
        m_screen:text-3xl
        font-bold
        text-slate-900
        filter
        drop-shadow-lg
        '>{title}</h1>
      </div>
    </>
  )
}

export default Title
