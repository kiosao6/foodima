import { AppRouter } from "./Routes/AppRouter"
import { Toaster } from "sonner"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useEffect, useLayoutEffect, useState } from "react"
import { useStore } from "./Store/store"
import { Loader } from "./Components/Loader"
import { gsap } from "gsap"


function App() {


  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const {  setFavoritesOnLoad, setCurrentRecipe, currentRecipe } = useStore();

  useEffect(() => {
    
    const storage = JSON.parse(localStorage.getItem('recipes')) || [];

    if(storage.length <= 0) return;
    setFavoritesOnLoad(storage);

  }, [])

  useEffect(() => {
    
    const lastRecipe = JSON.parse(localStorage.getItem('lastRecipe'));

    if(!lastRecipe) return;

    setCurrentRecipe(lastRecipe)

  }, [])
  
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);


  useLayoutEffect(() => {

    const context = gsap.context(() => {

      const tl = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      })

      setTimeline(tl)

    })
  
    return () => context.revert();
  }, [])

  return (
    <>
    <Toaster toastOptions={{
        classNames: {
          title: '!text-dark font-figtree text-sm !font-medium',
          actionButton: '!bg-transparent group',
          
        },
      }} />
    
    { loaderFinished ? <ReactLenis root>
        <AppRouter />
    </ReactLenis> : <Loader timeline={timeline} />}
    
    </>
  )
}

export default App
