import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setOpenCart } from '../App/CartSlice_Reducer'
import { selectAddItemState } from '../App/CartSlice_Reducer'

const NavBar = () => {
    const item_Array = useSelector(selectAddItemState)
    console.log(item_Array)

    const[navState, setNavState] = useState(false)

    const dispatch = useDispatch()

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        window.scrollY > 30 ? setNavState(true) : setNavState(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)

        return() => {
            window.removeEventListener('scroll', onNavScroll)
        }
    },[])
  return (
    <>
      <header className={
        !navState ? 'absolute top-5 s_screen:top-2 m_screen:top-3 h-[9vh] left-0 right-0 opacity-100 z-50 flex items-center justify-center': 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
      }>
        <nav className='flex
        items-center
        justify-between
        nike-container'>
            <div className='flex
            items-center'>
                <img src={logo} alt='logo/img' className={`w-16
                h-auto
                ${navState ? 'filter brightness-0':''}
                s_screen:w-12
                m_screen:w-14`}/>
            </div>
            <div><h1 className={`header-font text-lg ${!navState ? 'text-slate-100':'text-slate-900 font-bold'}`}>Foot Friendly</h1></div>
            <ul className='flex
            items-center
            justify-center
            gap-2
            '>
                <li className='grid
                items-center
                '>
                    <MagnifyingGlassIcon className={`icon-style ${navState ? 'text-slate-900 transition-all delay-300': ''}`}/>
                </li>
                <li className='grid
                items-center
                '>
                    <HeartIcon className={`icon-style ${navState ? 'text-slate-900 transition-all delay-300': ''}`}/>
                </li>
                <li className='grid
                items-center
                '>
                    <button type='button' className='border-none
                    outline-none
                    active:scale-110
                    transition-all
                    duration-200
                    relative' onClick={onCartToggle}>
                        <ShoppingBagIcon className={`icon-style ${navState ? 'text-slate-900 transition-all delay-300': ''}`}/>
                        <div className={`absolute
                        top-4 
                        right-0
                        shadow
                        w-4
                        h-4
                        text-[0.65rem]
                        leading-tight
                        font-medium
                        rounded-full
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        hover:scale-110
                        transition-all
                        duration-300
                        ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900':'bg-slate-100 text-slate-900 shadow-slate-200'}`}>{item_Array.length}</div>
                    </button>
                </li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar
