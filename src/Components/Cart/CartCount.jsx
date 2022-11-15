import React from 'react'
import {ChevronDoubleRightIcon, XMarkIcon} from '@heroicons/react/24/solid'

const CartCount = ({onCartToggle}) => {
  return (
    <>
      <div className='bg-gray-500
      bg-opacity-50
      h-11
      flex
      items-center
      justify-between
      px-3
      sticky
      top-0
      left-0
      right-0
      w-full'>
        <div className='flex
        items-center
        gap-3'>
            <div className='grid
            items-center
            cursor-pointer' onClick={onCartToggle}>
                <ChevronDoubleRightIcon className='w-5
                h-5
                text-slate-900
                hover:text-slate-100
                stroke-[2]
                active:scale-75'/>
            </div>
            <div className='grid
            items-center'>
                <h1 className='text-base
                font-medium
                text-slate-900'>Your Cart <span className='bg-theme-cart
                rounded
                px-1
                py-0.5
                text-slate-100
                font-normal
                text-xs'>(Items)</span></h1>
            </div>
        </div>
        <div className='flex
        items-center'>
            <button type='button' className='rounded
            bg-slate-900
            active:scale-90
            hover:bg-slate-100
            shadow-sm 
            shadow-gray-900'>
                <XMarkIcon className='w-6
                h-6
                text-white
                hover:text-slate-900
                stroke-[2]'/>
            </button>
        </div>
      </div>
    </>
  )
}

export default CartCount
