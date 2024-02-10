



export const CTA = ({text = 'Jump to recipe', classes, onClick}) => {
    const buttonClasses = `cta justify-start sm:justify-center lg:justify-start  btn btn-3 text-lg ${classes}`
    
  return (
    <>
            <button onClick={onClick} className={buttonClasses}>
                <span className="btn-border"></span>
                <span className="btn-ripple">
                    <span></span>
                </span>
                <span className="btn-title">
                    <span data-text={text}>{text}</span>
                </span>
            </button>
    </>
  )
}