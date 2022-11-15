import React from 'react'
import { Cart, FlexContent, Footer, Hero, NavBar, Sales, Stories } from './Components/Index'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './Data/data'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Cart/>
      <main className='flex
      flex-col
      gap-16
      relative'>
        <Hero heroapi={heroapi}/>
        <Sales EndPoint={popularsales} ifExists/>
        <FlexContent EndPoint={highlight} ifExists/>
        <Sales EndPoint={toprateslaes}/>
        <FlexContent EndPoint={sneaker}/>
        <Stories story={story}/>
      </main>
      <Footer footer={footerAPI}/>
    </div>
  )
}

export default App
