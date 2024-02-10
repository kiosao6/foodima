import { create } from 'zustand';
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools((set) => ({

    isMenuOpen: false,
    isLoading: false,
    originalRecipes: [],
    recipes: [],
    currentRecipe: null,
    favorites: null,
    categories: [],
    savedFilters: [],

    // Reducers
    showMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

    setIsLoading: () => set(state => ( { isLoading: !state.isLoading } ) ),

    setRecipes: (recipes) => set(state => ( { ...state, recipes })),
    setOriginalRecipes: (originalRecipes) => set(state => ( { ...state, originalRecipes })),

    setSavedFilters: (savedFilters) => set(state => ({ ...state, savedFilters})),

    setCurrentRecipe: (recipe) => set(state => ({ ...state, currentRecipe: recipe })),

    setFavoritesOnLoad: (recipes) => set(state => ({ favorites: recipes })),

    setCategories: (categories) => set(() => ({categories: categories})),

    setFavoritesOnClick: (recipes) => set(state => ({
        favorites: state.favorites === null ? [recipes] : [...state.favorites, recipes]
    })),

    cleanFavorites: () => set(() => ({ favorites: null }))

  })))
