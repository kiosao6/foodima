import { useEffect, useRef } from "react"
import { words } from "../Hooks/words"

import { introAnimation, progressBar, collapseWords } from "../Hooks/animations"
import { gsap } from "gsap"


export const Loader = ({timeline}) => {

    const loaderRef = useRef();
    const wordGroupRef = useRef();
    const lineRef = useRef();


    useEffect(() => {
      
        timeline && 

        timeline.add(introAnimation(wordGroupRef)).add(progressBar(lineRef), 0).add(collapseWords(loaderRef), "-=1")
        
        
    }, [timeline])
    

  return (
    <div ref={loaderRef} className="loader-wrapper w-full h-full fixed inset-0 overflow-hidden">
        <div className="loader flex justify-center items-center flex-col bg-white overflow-hidden z-10">
            <div className="words relative overflow-hidden h-[24.8rem]">
                <div className="overlay absolute inset-0 h-full z-20"></div>
                <div ref={lineRef} className="fixed w-0 bottom-0 left-0 right-0 bg-black h-2 z-20"></div>
                <div ref={wordGroupRef} className="words-group relative overflow-hidden flex flex-col">
                    {
                        words.map((word, index) => (
                            <span key={index} className="loader-word block text-3xl tracking-tight font-light lowercase">{word}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}