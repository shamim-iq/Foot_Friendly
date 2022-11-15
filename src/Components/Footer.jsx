import React from 'react'

const Footer = ({ footer: { titles, links } }) => {
  return (
    <>
      <footer className='bg-theme
      pt-7
      pb-5'>
        <div className='nike-container
        text-slate-200'>
            <div className='grid
            items-start
            grid-cols-3 
            max-w-2xl
            w-full
            m-auto
            m_screen:max-w-none
            m_screen:gap-5
            '>
                {   
                    titles.map((val, i) => (
                        <div key={i} className='grid
                        items-center'>
                            <h1 className='text-lg
                            l_screen:text-base
                            m_screen:text-sm
                            uppercase
                            font-semibold'>{val.title}</h1>  
                        </div>
                    ))
                }
                {
                    links.map((list, i) => (
                        <ul key={i} className='grid
                        items-center
                        gap-1'>
                            {
                                list.map((val, i) => (
                                    <li key={i} className='text-sm
                                    s_screen:text-xs'>{val.link}</li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>{/* columns with unordered lists */}
            <div className='mt-5 text-center'>
                <p className='text-sm
                m_screen:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup>
                All Reserved Rights 2022 <span className='font-semibold'>Shamim Iqbal</span>
                </p>
            </div>
        </div>{/* Main container inside footer */}
      </footer>
    </>
  )
}

export default Footer
