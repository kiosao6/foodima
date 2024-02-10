import {gsap} from "gsap";



export const introAnimation = (wordGroupRef) => {

    const tl = gsap.timeline();

    tl.to(wordGroupRef.current, {
        yPercent: -80,
        duration: 5,
        ease: "power3.inOut"
    });

    return tl;

}

export const progressBar = (lineRef) => {

    const tl = gsap.timeline();

    tl.to(lineRef.current, {
        scale: 1,
        width: "100%",
        duration: 5,
        ease: "power3.inOut"
    })

    return tl;


}

export const collapseWords = (loaderRef) => {
    const tl = gsap.timeline();
    
    tl.to(loaderRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power3.inOut"

    })

    return tl;
}