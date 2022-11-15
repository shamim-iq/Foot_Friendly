import React from 'react'
import Clips from './Utils/Clips'
import Social_links from './Utils/Social_links'

const Hero = ({heroapi}) => {
    const {title, subtitle, img, btntext, videos, sociallinks} = heroapi
  return (
<>
    <div className='relative h-auto w-auto flex flex-col'> {/*Main div*/}
        <div 
        className='
        bg-theme 
        clip-path 
        xl_screen:h-[85vh]
        l_screen:h-[75vh] 
        m_screen:h-[65vh] 
        s_screen:h-[55vh] 
        xs_screen: h-[45vh] 
        w-auto absolute 
        top-0 
        left-0 
        right-0 
        opacity-100 
        z-10'
        > </div>
        <div className='
        relative
        opacity-100
        z-20
        grid
        items-center
        justify-items-center
        nike-container 
        '>{/*Container div*/}
            <div className='
            grid
            items-center
            justify-items-center
            mt-28
            m_screen:mt-24 
            '>{/*Text/Button/video/social Container*/}
                <h1 className='
                text-6xl
                l_screen:text-5xl
                m_screen:text-4xl
                s_screen:text-3xl
                xs_screen:text-2xl
                font-extrabold
                filter
                drop-shadow-sm
                text-slate-200 
                '>{title}</h1>
                <h1 className='
                text-6xl
                l_screen:text-5xl
                m_screen:text-4xl
                s_screen:text-3xl
                xs_screen:text-2xl
                font-extrabold
                filter
                drop-shadow-sm
                text-slate-200
                '>{subtitle}</h1>
                <button type='button' 
                className='
                button-theme
                bg-slate-200
                shadow-slate-200
                rounded-xl
                my-5
                m_screen:scale-90'>{btntext}</button>
                <div className='
                grid
                item-center
                gap-5
                m_screen:gap-3 absolute top-[33vh]
                l_screen:top-[27vh] left-[11%]
                xl_screen:left-0 w-auto h-auto 
                m_screen:mt-6 product-shadow'> {/*Video Links*/}
                    {
                        videos.map((val, i) => (
                            <Clips key={i}
                            imgsrc={val.imgsrc}
                            clip={val.clip}
                            />
                        ))
                    }
                </div>
                <div className='
                grid
                items-center
                absolute
                top-[33vh]
                l_screen:top-[27vh]
                right-0
                gap-3
                m_screen:mt-6
                product-shadow'>{/*Social Links*/}
                    {
                        sociallinks?.map((val, index) => (
                            <Social_links key={index}
                            icon= {val.icon}
                            />
                        ))
                    }
                </div>
            </div> 
            <div> {/*Image Content*/}
                <img
                src= {img}
                alt='Hero-img/img'
                className='
                w-auto
                h-[45vh]
                l_screen:h-[35vh]
                m_screen:h-[31vh]
                s_screen:h-[21vh]
                xs_screen:h-[19vh]
                transitions-theme
                -rotate-[25deg]
                hover:rotate-0
                cursor-pointer
                object-fill
                product-shadow
                '>
                </img>
            </div>
        </div>
    </div>
</>
  )
}

export default Hero
