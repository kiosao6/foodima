



import { useStore } from "../Store/store";
import { UseToggleStyles } from "../Hooks/UseToggleStyles";
import { useRef } from "react";
import {gsap} from "gsap";


export const BurguerButton = () => {

  const { toggleStyles } = UseToggleStyles();
  const buttonRef = useRef(null)

  const isMenuOpen = useStore((state) => state.isMenuOpen);


  const callParallax = (e) => {
    parallaxIt(e, buttonRef.current, 25);
  };

  const parallaxIt = (e, target, movement) => {
    const rect = target.getBoundingClientRect();
    const relX = e.pageX - rect.left - window.scrollX;
    const relY = e.pageY - rect.top - window.scrollY;
  
    gsap.to(target, {
      duration: 0.3,
      x: (relX - rect.width / 2) / rect.width * movement,
      y: (relY - rect.height / 2) / rect.height * movement,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(buttonRef.current, { duration: 0.3, scale: 1, x: 0, y: 0 });
  };
  
  const onMouseEnter = () => {
    gsap.to(buttonRef.current, { duration: 0.3, scale: 1.1 });
  };

  const onButtonClick = () => {
    toggleStyles()
  }

  const backdropClasses = `backdrop fixed opacity-0 pointer-events-none invisible top-0 bottom-0 left-0 right-0 bg-black/40 ${(isMenuOpen && '!visible !opacity-100 pointer-events-auto')}`

  return (
    <>
    <div onClick={toggleStyles} className={backdropClasses}></div>
    <button
      ref={buttonRef}
      onMouseMove={callParallax}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onButtonClick}
      className="relative z-[60] flex flex-wrap justify-center items-center gap-5"
    >
      <div data-magnetic className="burguer-menu size-11 rounded-full flex justify-center items-center">
        <div className='lineContainer flex flex-col gap-[.3rem] justify-between h-[9px] relative'>
          <div className='line1 w-[25px] h-[1.5px] rounded-full bg-dark transition-all duration-300 ease-out'></div>
          <div className='line2 w-[25px] h-[1.5px] rounded-full bg-dark transition-all duration-300 ease-out'></div>
        </div>
      </div>
    </button>
    
    </>
  );
};
