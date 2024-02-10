import { useLenis } from "@studio-freight/react-lenis";
import { useStore } from "../Store/store"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "/components/ui/alert-dialog"
  import { Button } from "/components/ui/button"
import { useState } from "react";
   
  export function AlertDialogDemo() {

    const { favorites, cleanFavorites } = useStore();

    const [isOpen, setIsOpen] = useState(false);

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
      })

    const onHandleClick = () => {
        cleanFavorites();
        localStorage.removeItem('recipes');
        lenis.start();
    }

    const showScroll = () => {
        document.body.classList.add('!overflow-visible')
        setIsOpen(prev => !prev) 

        if(!isOpen){
            lenis.stop()
        } else {
            lenis.start()
        }
    }

    return (
      <AlertDialog onOpenChange={showScroll} >
        <AlertDialogTrigger asChild>
          <Button variant="outline">Delete Favorites</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all your
              recipes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, keep my recipes</AlertDialogCancel>
            <AlertDialogAction onClick={onHandleClick}>Yes, delete my recipes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }