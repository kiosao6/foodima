
import { Line } from '/src/SVGs/Line'
import { BigButton } from '/src/Components/BigButton'
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';



export const About = () => {
  const texts = useRef();

  useLayoutEffect(() => {

  
      gsap.from(".lines span",{
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: .1,
        skewY: 7,
        stagger: {
          amount: 0.3
        }
      })

      gsap.from(texts.current,{
        duration: 1,
        opacity: 0,
        // ease: "power4.out",
        delay: 1,
      })

  }, [])
  return (
    <section id='section' className="my-16 sm:my-22 max-w-7xl lg:mx-auto !overflow-hidden">

        <div className='hidden container !p-0 sm:flex sm:flex-col sm:flex-wrap items-center w-full justify-center mb-12'>
            <div className='lines w-full h-[110px] sm:h-[70px] lg:h-[110px] relative overflow-hidden'>
                <span className=" opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Exploring the Essense of </span>
            </div>
            <div className='lines w-[100%] h-[110px] sm:h-[70px] lg:h-[110px] relative overflow-hidden'>
                <span className="opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Foodima</span>
            </div>
          </div>

        <div className='container !p-0 flex sm:hidden sm:flex-wrap items-center w-full justify-center mb-12 mr-6'>
            <div className='lines w-full h-[70px] sm:h-[120px] relative overflow-hidden'>
                <span className=" opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Exploring the </span>
            </div>
            <div className='lines w-[100%] h-[70px] sm:h-[120px] relative overflow-hidden'>
                <span className=" opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Essence of </span>
            </div>
            <div className='lines w-[100%] h-[70px] sm:h-[120px] relative overflow-hidden'>
                <span className="opacity-1 text-6xl max-w-7xl sm:text-6xl sm:text-center font-medium text-dark tracking-tight lg:text-8xl lg:text-left absolute">Foodima</span>
            </div>
          </div>


        <Line />

        <div ref={texts} className='my-20 sm:mx-4 lg:mx-0 flex flex-col lg:flex-row '>

            <span className="uppercase underline tracking-tight sm:mb-4 lg:mr-12 text-dark text-base lg:text-left lg:mb-0">The idea <br className="hidden" /> behind Foodima</span>

            <div className='max-w-4xl sm:mx-auto lg:text-left'>

                <p className="text-xl sm:text-xl tracking-tight text-dark !leading-9 mt-6 sm:mt-0">Discover Foodima, your go-to online recipe diary offering a seamless, free, and minimalist experience. Dive into the world of culinary exploration without the need for accounts – a platform designed for simplicity, where each recipe becomes a cherished entry in your personal flavor journal.  
                </p>
                <p className="text-xl sm:text-xl  tracking-tight text-dark !leading-9 mt-8">Keeping your favorite recipes in one place has never been simpler. Foodima offers an effortless solution, ensuring your culinary creations are easily accessible and neatly organized. 
                </p>
                <p className="text-xl sm:text-xl  tracking-tight text-dark !leading-9 mt-8 mb-20">Whether you're a seasoned chef or a home cook experimenting in the kitchen, Foodima welcomes you to a space where culinary exploration knows no bounds. Let's cook, share, and savor the joy of creating delicious memories together.
                </p>

                <BigButton text="Explore recipes" />
                
            </div>

        </div>

    </section>
  )
}