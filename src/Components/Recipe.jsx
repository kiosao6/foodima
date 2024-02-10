import { Star } from "../SVGs/Star"
import { toast } from "sonner"

import { useStore } from "../Store/store"
import { Link } from "react-router-dom"


export const Recipe = ({recipe}) => {

  const { setCurrentRecipe } = useStore();
  const { strMealThumb, strCategory, strMeal } = recipe;

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

  const onClickDiv = () => {
    setCurrentRecipe(recipe);
    localStorage.setItem('lastRecipe', JSON.stringify(recipe));
  }

  return (
    <Link to="/recipe" onClick={onClickDiv} className="max-w-xs transition-all duration-300 lg:max-w-[22rem] shadow-sm mx-auto sm:mx-0 border bg-zi nc-50 rounded-3xl hover:shadow-md cursor-pointer">

        <div className="mb-6">
            <img className="rounded-3xl" src={strMealThumb} alt="" />
        </div>


          <div className="px-4">
            <h2 className="mb-1 text-dark text-xl lg:te xt-2xl tracking-tight max -w-[16rem] font-normal">{strMeal}</h2>
            <div className="flex gap-2 my-6 items-center">
                <span className={colors(strCategory)}>{strCategory}</span>
                <div className="max-h-[24px]" onClick={(event) => event.preventDefault()}>
                  <Star toast={toast} recipe={recipe} />
                </div>
            </div>
          </div>
    </Link>
  )
}