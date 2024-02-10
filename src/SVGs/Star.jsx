import { useStore } from "../Store/store"
import { Check } from "./Check"
import { CloseIcon } from "./CloseIcon"


export const Star = ({toast, recipe}) => {

  const {setFavoritesOnClick, setFavoritesOnLoad} = useStore();

  const favorites = JSON.parse(localStorage.getItem('recipes')) || [];
  const favoritesCheck = favorites.some(favorite => favorite.idMeal === recipe.idMeal);
  const setLocalStorage = () => {

    if(favoritesCheck === false){
      const updatedFavorites = [...favorites, recipe];
      localStorage.setItem('recipes', JSON.stringify(updatedFavorites))
      setFavoritesOnClick(recipe);

      toast("Success! Your Recipe is now saved", {
        icon: <Check />,
        action: {
          label: <CloseIcon />,
          onClick: () => console.log('Undo'),
        },
      })


    } else {
      const newFavorites = favorites.filter(favorite => favorite.idMeal !== recipe.idMeal ); 
      localStorage.setItem('recipes', JSON.stringify(newFavorites) )
      setFavoritesOnLoad(newFavorites)

      toast("Success! Your Recipe has been removed from your list", {
        icon: <Check />,
        action: {
          label: <CloseIcon />,
          onClick: () => console.log('Undo'),
        },
      })


    }

    

  }
  return (
    <>  
        <button
          title={`${favoritesCheck ? "Remove from my favorites" : "Save this recipe"}`}
          onClick={() =>
            setLocalStorage()
          }
        >
          <svg className={`[&>*]:hover:stroke-zinc-400 [&>*]:active:stroke-zinc-400 [&>*]:lg:hover:stroke-zinc-600 transition-all cursor-pointer ${favoritesCheck ? 'fill-sandia [&>*]:active:fill-sandia [&>*]:hover:!stroke-none'  : 'fill-none '}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z" stroke={`${favoritesCheck ? 'none' : '#a1a1aa'}`} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </button>
    </>
  )
}

