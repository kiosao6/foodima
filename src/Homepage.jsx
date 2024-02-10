import { Toaster } from "/components/ui/toaster"

import { Hero } from "./Hero Section/Hero"
import { Main } from "./Main/Main"



export const Homepage = () => {
  return (
    <>
      <Hero />
      <Main />
      <Toaster />
    </>
  )
}