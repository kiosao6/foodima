
import { CTA } from "/src/Components/CTA"



export const Texts = () => {

  
  return (
    <div className="text-dark px-8 sm:px-0 flex flex-col sm:max-w-lg lg:max-w-80 lg:ml-20">
        <h1 className="font-semibold tracking-tight text-4xl lg:text-5xl mb-4">Your Flavor Journal</h1>
        <p className="font-normal text-zinc-600 text-pretty leading-7 mb-8 lg:mb-10 text-base">Discover the joy of effortlessly saving your favorite recipes with Foodima. Your culinary journey is just a click away – where simplicity meets flavor.</p>

        <CTA />
    </div>
  )
}