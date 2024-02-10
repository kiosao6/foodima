import { Input } from "/components/ui/input"
import { Recipe } from "../Components/Recipe";
import { Sidebar } from "./Components/Sidebar";
import { Empty } from "./Components/Empty";
import fork from '/src/Images/fork.png'
import { SkeletonRecipe } from "./Components/Skeleton";
import {  MyDrawer } from "../Components/Drawer";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../validators/userSchema";
import { useFetch } from "../Hooks/useFetch";
import { useStore } from "../Store/store";

const emptyTexts = {
  heading: 'Nothing here yet',
  text: 'Discover an array of recipes with a simple search – your gateway to a world of culinary inspiration awaits!'
}

const { heading, text } = emptyTexts;


export const Main = () => {
  // Extract the state to render or not the loading components!
  const { isLoading, recipes, currentRecipe, originalRecipes } = useStore()

  const { getData, error } = useFetch()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(userSchema)
  })

  const onSubmit = (data) => {
    getData(data.search)
  }

  
  return (
    <main id="main" className="pb-10 min-h-[40rem] lg:mx-auto max-w-7xl lg:grid lg:grid-cols-8">


      <div className="hidden lg:flex lg:flex-col lg:col-span-2">
        <h2 className="text-3xl text-dark mb-8 tracking-tight lg:col-span-2 font-semibold">Recipes 👩‍🍳</h2>
        {(!isLoading) && <Sidebar /> }
      </div>


      <div className={`flex flex-col ${(!isLoading) ? 'lg:col-span-6' : 'lg:col-span-6'}`}>

          <form onSubmit={handleSubmit(onSubmit)} className={`${errors.length ? 'mb-2' : 'mb-2'} flex justify-between gap-4`} action="">

            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                  <svg className="w-4 h-4 flex text-dark dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#1b1b1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input {...register('search')} className={`text-dark ps-12 placeholder:text-zinc-400 bg-zinc-100 transition-all rounded-xl h-14 w-full text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-[-1px] file:bg-transparent ${errors.search ? 'ring-1 !bg-[#ffeaef] ring-[#f7345e] focus-visible:!ring-[#f7345e] focus-visible:ring-2 transition-none focus-visible:ring-offset-[-1px]' : ''} `} disabled={isLoading} type="text" placeholder='Try something like "salad" or "beef"' />

            </div>
            
                
          <MyDrawer />
          </form>
                {errors.search?.message && <p className="text-xs text-sandia font-medium">{errors.search?.message}</p>}
                {error !== null && <p className="text-xs text-sandia font-medium">{error}</p>}
                


          {(!isLoading && recipes.length === 0) && <Empty image={fork} heading={heading} text={text} /> }

          {
            (isLoading && <div className={`flex flex-wrap ${errors.length ? 'mt-0' : 'mt-4'} justify-center gap-8 lg:justify-between lg:grid lg:grid-cols-3 lg:gap-8`}>
            <SkeletonRecipe />
            <SkeletonRecipe />
            <SkeletonRecipe />
            <SkeletonRecipe />
          </div>)
          }

          { !isLoading && (<div className={`flex section flex-wrap ${errors.length ? 'mt-0' : 'mt-4'} justify-center gap-8 lg:justify-between lg:grid lg:grid-cols-3 lg:gap-8`}>
            {
              recipes.map(recipe => (
                <Recipe key={recipe.idMeal} recipe={recipe} />
              ))
            }
          </div>)}

      </div>
    </main>
  )
}