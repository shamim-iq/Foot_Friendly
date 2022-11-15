import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../App/CartSlice_Reducer'

const Cart_Item = ({item: {id, color, shadow, title, text, img, price, cartQuantity}}) => {

  const dispatch = useDispatch()

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({id, color, shadow, title, text, img, price, cartQuantity}))
  }

  const onIncreaseItmQTY = () => {
    dispatch(setIncreaseItemQTY({id, color, shadow, title, text, img, price, cartQuantity}))
  }
  const onDecreaseItmQTY = () => {
    dispatch(setDecreaseItemQTY({id, color, shadow, title, text, img, price, cartQuantity}))
  }

  return (
    <>
      <div className='flex
      items-center
      justify-between
      w-full
      px-5
      '>
        <div className='flex
        items-center
        gap-5'>
          <div className={`bg-gradient-to-b 
          ${color}
          ${shadow}
          relative
          roundedp-3
          hover:scale-105
          transition-all
          duration-100
          ease-in-out
          grid 
          items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className='w-36 
            h-auto 
            object-fill
            l_screen:w-28 '></img>
          </div>
          <div className='grid
          items-center
          gap-4
          '>
            <div className='grid
            items-center
            leading-none'>
              <h1 className='font-medium
              text-lg
              text-slate-900
              l_screen:text-sm
              '>{title}</h1>
              <p className='text-sm
              text-slate-800
              l_screen:text-xs'>{text}</p>
            </div>
            <div className='flex
            items-center
            justify-around
            w-full'>
              <button type='button' className='bg-theme-cart
              rounded
              w-6
              h-6
              l_screen:w-5
              l_screen:h-5
              flex
              items-center
              justify-center
              active:scale-90' onClick={onDecreaseItmQTY}>
                <MinusIcon className='w-5 
                h-5
                l_screen:w-4
                l_screen:h-4
                text-white
                stroke-[2]'/>
              </button>
                <div className='bg-theme-cart
                rounded
                text-white
                font-medium
                l_screen:text-xs
                w-7
                h-6
                l_screen:h-5 
                l_screen:w-6
                flex
                items-center
                justify-center'>
                  {cartQuantity}
                </div>
              <button type='button' className='bg-theme-cart
              rounded
              w-6
              h-6
              l_screen:w-5 
              l_screen:h-5
              flex
              items-center
              justify-center
              active:scale-90' onClick={onIncreaseItmQTY}>
                <PlusIcon className='w-5 
                h-5
                l_screen:w-4
                l_screen:h-4
                text-white
                stroke-[2]'/>
              </button>
            </div>
          </div>
        </div>{/* Img and qty containter in cart */}
        <div className='grid
        items-center
        gap-5
        '>
          <div className='grid
          items-center
          justify-center'>
            <h1 className='text-lg
            l_screen:text-base
            text-slate-900
            font-medium'>&#8377;{price * cartQuantity}</h1>
          </div>
          <div className='grid
          items-center
          justify-center'>
            <button type='button' className='bg-theme-cart
            rounded
            grid
            items-center
            justify-center
            active:scale-90
            p-1
            l_screen:p-0.5
            cursor-pointer' onClick={onRemoveItem}>
              <TrashIcon className='w-5 
              h-5
              text-white'/>
            </button>
          </div>
        </div>{/* Price and trash icon */}
      </div>
    </>
  )
}

export default Cart_Item
