import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import emptybag from '../../assets/emptybag.png'
import { setCloseCart } from '../../App/CartSlice_Reducer'
import { useDispatch } from 'react-redux'

const CartEmpty = () => {
  const dispatch = useDispatch()

  const onCartToggle = () => {
    dispatch(setCloseCart({
      cartState: false
    }))
  }
  return (
    <>
      <div className='flex
      items-center
      justify-center
      flex-col
      h-screen
      px-11
      text-center
      gap-7'>
        <img src={emptybag} alt='img/emptybag' className='w-40
        l_screen:w-36 
        s_screen:w-28
        h-auto
        object-fill
        transition-all
        duration-300
        hover:scale-110
        hover:rotate-90
        product-shadow'/>
        <button type='button' className='button-theme
        bg-gradient-to-b 
        from-amber-500 
        to-orange-500
        shadow-lg
        shadow-orange-500
        flex
        items-center
        justify-center
        text-slate-900
        py-2
        gap-3
        text-sm
        px-5
        font-semibold
        active:scale-110' onClick={onCartToggle}>
          <ArrowLeftIcon className='w-5
          h-5 
          text-slate-900'/>
          <span className=''>Back to Foot Friendly Store</span>
        </button>
      </div>
    </>
  )
}

export default CartEmpty
