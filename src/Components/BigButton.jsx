import { Link } from "react-router-dom"





export const BigButton = ({text = 'Explore recipes', classes = ''}) => {

    const divClasses = `button-wrapper sm:justify-center lg:justify-start ${classes}`

  return (
    <div className={divClasses}>
        <Link to="/" className="btn-link btn-link-cta -xxl h-36 text-2xl sm:text-3xl sm:h-44 lg:h-56">
            <span className="btn-border"></span>
            <span className="btn-ripple">
                <span></span>
            </span>
            <span className="btn-title">
                <span data-text={text}>{text}</span>
            </span>
        </Link>
  </div>
  )
}