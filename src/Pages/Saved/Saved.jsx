import { Empty } from "/src/Main/Components/Empty"

import bata from '/src/Images/bata.png'
import { CTA } from "/src/Components/CTA";
import { Line } from "/src/SVGs/Line";
import { Recipe } from "/src/Components/Recipe";
import { useStore } from "/src/Store/store";
import { AlertDialogDemo } from "/src/Components/AlertDialog";
import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';

const emptyTexts = {
  heading: 'Nothing here',
  text: 'It seems your favorites list is empty. Start adding recipes to create a personalized culinary collection. Let the flavor adventure begin!'
}

const { heading, text } = emptyTexts;

const favoritess = JSON.parse(localStorage.getItem('recipes')) || [];


export const Saved = () => {
  const { favorites } = useStore();

  const texts = useRef()
  useLayoutEffect(() => {


      gsap.from(".lines span",{
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: .1,
        skewY: 7,
        stagger: {
          amount: 0.3
        }
      })

      gsap.from(texts.current,{
        duration: 1,
        opacity: 0,
        delay: 1,
      })

  }, [])


  return (
    <>

      { (favorites !== null && favorites.length !== 0) && (<section id='section' className="my-14 sm:my-22 max-w-7xl lg:mx-auto overflow-hidden">

      <div className='hidden container !p-0 sm:flex sm:flex-col items-center w-full justify-center mb-12'>
            <div className='lines flex gap-5 w-full h-[110px] sm:h-[70px] lg:h-[110px] relative overflow-hidden'>
                <span className="opacity-1 w-auto text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left">Favorites</span>
                <span className="opacity-1 w-auto text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left">Collection</span>
            </div>
      </div>

      <div className='container !p-0 flex sm:hidden sm:flex-wrap items-center w-full justify-center mb-12 mr-6'>
            <div className='lines w-full h-[70px] sm:h-[120px] relative overflow-hidden'>
                <span className=" opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Favorites</span>
            </div>
            <div className='lines w-[100%] h-[70px] sm:h-[120px] relative overflow-hidden'>
                <span className="opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Collection</span>
            </div>
      </div>



      <Line />
      <div ref={texts} className="flex flex-wrap gap-8 mt-20 sm:justify-center lg:justify-start">
        {
          ((favorites !== null ) ? (favorites.map(favorite => (
            <Recipe key={favorite.idMeal} recipe={favorite} />
            ))) : null )
          }
      </div>
      <div className="flex justify-center items-center mt-6">
          <AlertDialogDemo />
      </div>

      </section>)}


      {  (favorites === null || favorites.length === 0) && (<div className="flex  flex-col justify-center items-center mt-20">
        <Empty image={bata} heading={heading} text={text} />
        <CTA path='/' text='Explore recipes' classes='mt-12 mb-24 justify-center lg:justify-center' />
      </div>) }
    
    </>
  )
}