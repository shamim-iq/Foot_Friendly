import React from 'react'

const FlexContent = ({EndPoint: { title, heading, subtitle, text, img, btn, url }, ifExists }) => {
  return (
    <div className={`flex
        items-center
        justify-between
        l_screen:flex-col
        l_screen:justify-center
        ${ifExists ? 'flex-row-reverse':'flex-row'}`}>
        <div className='max-w-lg
        l_screen:max-w-none
        w-full
        m_screen:text-center
        grid
        items-center
        l_screen:justify-items-center'>
            <h1 className='text-4xl
            s_screen:text-3xl
            font-bold
            text-gradient'>{heading}</h1>
            <h1 className='text-5xl
            l_screen:text-4xl
            m_screen:text-3xl
            s_screen:text-2xl
            font-bold
            text-slate-900
            filter
            drop-shadow-lg'>{title}</h1>
            <p className='xl_screen:text-sm
            my-4
            text-slate-900'>{text}</p>
            <a href={url} className='flex
            item-center' target='_blank' role='button'>
                <button type='button' className='button-theme
                bg-slate-900
                shadow-slate-900
                text-slate-100
                py-1.5'>{btn}</button>
            </a>
        </div> {/* Text Content */}
        <div className='flex 
        items-center
        justify-center
        max-w-xl
        relative
        l_screen:max-w-none
        w-full'>
            <img src={img} 
            alt={`img/${heading}`}
            className={`w-auto 
            object-fill 
            transitions-theme
            ${ifExists ? 'h-60 l_screen:h-56 m_screen:h-52 s_screen:h-44 xs_screen:h-36 hover:-rotate-12':'h-72 l_screen:h-64 m_screen:h-60 s_screen:h-48 xs_screen:h-40 hover:rotate-12'}`}/>
        </div>{/* Image Content */}
    </div>
  )
}

export default FlexContent
