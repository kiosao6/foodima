import { useState } from "react";
import { useStore } from "../Store/store";




    export const useFetch = () => {

        const { setIsLoading, setRecipes, setCategories, setOriginalRecipes, setSavedFilters } = useStore();

        const [error, setError] = useState(null);

        const getData = async (value) => {

            try {
                setIsLoading();
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
                const data = await response.json();
                const recipes = data.meals;
                const categs = recipes.map(recipe => recipe.strCategory);
                const updatedCategories = [...new Set(categs)]
                setSavedFilters([])
                setCategories(updatedCategories);
                setOriginalRecipes(recipes);
                setRecipes(recipes);
                setError(null)
                


                setIsLoading();
            } catch (error) {
                setIsLoading();
                setError('No results were found for this search. Please try a different one');
                throw new Error('No results were found for this search. Please try a different one')
            }
        }

        return {
            getData,
            error
            
        }
    }