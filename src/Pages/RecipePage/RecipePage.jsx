import { Location } from "/src/SVGs/Location"
import { CTA } from "/src/Components/CTA2"

import { Circle } from "/src/SVGs/Circle"
import { Star } from "/src/SVGs/Star"

import { toast } from "sonner"
import { useEffect } from "react"
import { useRef } from "react"

import { gsap } from "gsap"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';



export const RecipePage = () => {

  
  const lastRecipe = JSON.parse(localStorage.getItem('lastRecipe')) || null;

  const ingredients = [];


  for(let i = 1; i <= 20; i++){
    const ingredient = lastRecipe[`strIngredient${i}`];
    const measure = lastRecipe[`strMeasure${i}`];

    ingredients.push({ingredient , measure });

  }

  const finalIngredients = ingredients.filter(ingredient => {
    return ingredient.ingredient !== "" && ingredient.measure !==  null
  })

  const colors = (category) => {

    switch(category) {
      case 'Vegetarian': 
        return "bg-[#F0F5C4] mr-auto py-3 px-6 rounded-full uppercase tracking-widest text-xs text-[#59871f] font-semibold"
      
      case 'Breakfast':
        return "bg-[#EFEDFA] mr-auto py-3 px-6 rounded-full uppercase tracking-widest text-xs text-[#3C3A8F] font-semibold"
      
      case 'Seafood': 
        return "bg-[#E8F5FA] mr-auto py-3 px-6 rounded-full uppercase tracking-widest text-xs text-[#397A9E] font-semibold"

      default: 
        return "bg-peach mr-auto py-3 px-6 rounded-full uppercase tracking-widest text-xs text-sandia font-semibold"
    }

  }

  const preparation = useRef()

  gsap.registerPlugin(ScrollToPlugin)

  const scrollToSection = () => {
      gsap.to(window, {
        duration: .8,
        scrollTo: { 
          y: preparation.current.offsetTop,
          offsetY:20
        },
        ease: 'sine.inOut'
      });
  }

  useEffect(() => {
    // Scroll to top of page when component mounts
    window.scrollTo(0, 0);
  }, []); 

  return (

    <>
    <section className="section my-16 sm:my-22 max-w-5xl lg:mx-auto">
        <span className={colors(lastRecipe.strCategory)} >{lastRecipe.strCategory}</span>

        <div className="flex flex-col lg:flex-row lg:justify-between">

          <div className="flex flex-col max-w-4xl">
            <h1 className="text-5xl max-w-7xl mt-8 sm:text-6xl font-medium text-dark tracking-tight lg:text-6xl lg:text-left">{ lastRecipe.strMeal}</h1>
            <p className="text-lg sm:tex t-xl text-zinc-600 leading-7 mt-4">Discover the art of cooking with this delightful recipe. From carefully selected ingredients to expertly crafted steps, this dish brings joy to every palate.</p>
            <div className="flex mt-8 items-center justify-between">
                <div  className="flex flex-row items-center gap-x-8">
                    <CTA onClick={scrollToSection} classes='!w-auto !flex-grow-0' />
                  <a href={ lastRecipe.strYoutube} target="blank" className="link border-zinc-300 text-dark" >Watch video</a>
                </div>
                <Star recipe={lastRecipe} toast={toast} />
            </div>
          </div>
          
          <div className="hidden lg:flex lg:items-center w-[1px] mx-12 my-12 max-h-36 bg-zinc-300">
            <div className="w-[1px] max-h-36 bg-zinc-300"></div>
          </div>
          <Location location={lastRecipe.strArea} ingredients={finalIngredients.length} />


        </div>


        <div className="my-8">
          <img className="rounded-3xl" src={lastRecipe.strMealThumb} alt="" />
        </div>

        <div ref={preparation} className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between my-12">
          <div className="">
            <h2 className="text-3xl mb-3 font-medium text-dark tracking-tight">Ingredients:</h2>
            <ul className="max-w-xs flex flex-col divide-y divide-zinc-300 dark:divide-gray-700">

              {
                finalIngredients.map((ingredient, index) => (
                  <li key={index} className="inline-flex items-center gap-x-2 py-2 text-base u ppercase font-regular text-dark dark:text-white">
                    <Circle />
                    {ingredient.measure} - {ingredient.ingredient}
                  </li>
                ))
              }
  
            </ul>
          
          </div>


          <div className="max-w-2xl">
            <h2 className="text-3xl mb-3 font-medium text-dark tracking-tight">Instructions:</h2>
            <p className="text-lg text-dark tracking-tight text-pretty !leading-9 sm:text-lg">{lastRecipe.strInstructions}</p>
          </div>
        </div>
    </section>
    
    
    </>
  )
}