import { useEffect, useLayoutEffect, useRef } from "react"

import { gsap } from 'gsap';


export const Line = () => {

    const line = useRef();
      
    useLayoutEffect(() => {

        gsap.from(line.current,{
            duration: 1.2,
            opacity: 0,
            // ease: "power4.out",
            delay: 1.5,
        })
    
    }, [])




    const path = useRef(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId = null

    useEffect(() => {
        setPath(progress);
    }, [])

    const setPath = (progress) => {
        const sectionElement = document.getElementById('section');
        const width = sectionElement.offsetWidth;
        path.current.setAttributeNS(null, "d", `M0 50 Q${width * x} ${50 + progress}, ${width} 50` )
    }

    const lerp = ( x, y, a) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
        if(reqId){
            window.cancelAnimationFrame(reqId);
            resetAnimation()
        }
    }

    const manageMouseMove = (e) => {
        const { movementY, clientX } = e;

        const { left, width } = path.current.getBoundingClientRect()
        x = (clientX - left) / width
        progress += movementY;
        setPath(progress)


    }
    
    const manageMouseLeave = () => {
        animateOut()
    }



    const animateOut = () => {
        const newProgress = progress * Math.sin(time)
        progress = lerp(progress, 0, 0.035)
        time += 0.2;
        setPath(newProgress)

        if(Math.abs(progress) > 0.75){
            reqId = window.requestAnimationFrame(animateOut);
        } else {
            resetAnimation()
        }
    }

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }

    return (
        <div ref={line} className="h-[1px] w-full relative mb-5">
            <div onMouseEnter={manageMouseEnter} onMouseMove={manageMouseMove} onMouseLeave={manageMouseLeave}
            className="h-[40px] flex relative -top-[20px] z-40 hover:h-[150px] hover:-top-[75px]"></div>
            <svg className="w-full h-[150px] absolute -top-[50px]">
                <path className="stroke-2 stroke-sandia fill-none" ref={path}></path>
            </svg>
        </div>
    )
}