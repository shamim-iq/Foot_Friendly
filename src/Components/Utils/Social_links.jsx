import React from 'react'

const Social_links = ({icon}) => {
  return (
    <div>
        <img src={icon}
        alt='icon/social'
        className='
        h-8
        w-8
        flex
        items-center
        cursor-pointer
        m_screen:h-6
        m_screen:w-6
        s_screen:h-5
        s_screen:w-5
        translate-all
        duration-200
        hover:scale-110
        brightness-0
        '/>
    </div>
  )
}

export default Social_links
