import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Clips = ({imgsrc, clip}) => {
  return (
    <>
    <div className='
    relative
    h-28
    w-32
    rounded-xl
    overflow-hidden
    group
    cursor-pointer
    transition-all
    duration-300
    l_screen:w-28
    m_screen:w-24
    s_screen:w-16
    l_screen:h-24
    m_screen:h-20
    s_screen:h-14
    '>
      <img
        src={imgsrc}
        alt='thumnail/clip'
        className='
        inset-0
        flex
        h-full
        w-full
        object-cover
        absolute
        top-0
        left-0
        right-0
        rounded-xl
        opacity-100
        z-10
        transition-opacity
        duration-500
        '/>
      <div className='bg-white
      blur-effect-theme
      absolute
      top-11
      left-11
      l_screen:top-8
      l_screen:left-9
      s_screen:top-4
      s_screen:left-5
      right-0
      opacity-100
      z-[100]
      h-8
      w-8
      m_screen:w-5 
      m_screen:h-5
      flex
      items-center
      justify-center
      rounded-full
      '>
        <PlayIcon className='icon-style
        text-slate-900
        m_screen:h-3
        m_screen:w-3
        '/>
      </div>
      <video autoPlay= {true}
      loop= {true}
      muted= {true}
      playsInline= {true}
      className='
      absolute
      top-0
      right-0
      flex
      h-full
      w-full
      object-cover
      opacity-0
      z-0
      group-hover:opacity-100
      group-hover:z-50
      rounded-xl
      '>
        <source type='video/mp4' src={clip}/>
      </video>
    </div>
    </>
  )
}

export default Clips
