import React from 'react'
import Item from './Utils/Item'
import Title from './Utils/Title'

const Sales = ({ifExists, EndPoint: { title, items }}) => {

  return (
    <>
      <div className='nick-container'>
        <Title title={title}/>
        <div className={`${ifExists ? 'grid-cols-3 l_screen:grid-cols-2 s_screen:grid-cols-1': 'grid-cols-3 l_screen:grid-cols-3 m_screen:grid-cols-2 s_screen:grid-cols-1'}
        grid items-center
        justify-items-center
        gap-7
        l_screen:gap-5
        mt-7`}>
          {
            items?.map((val, ind) => (
              <Item {...val} key={ind} ifExists={ifExists}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Sales
