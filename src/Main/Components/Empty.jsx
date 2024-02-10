

export const Empty = ({image, heading, text}) => {
  return (
    <div className='flex flex-col items-center justify-center mt-8 lg:mt-6'>
        <img className='max-w-[10rem] mb-10 opacity-85' src={image} alt="" />
        <div className='max-w-xl text-center'>
            <p className='text-center mb-4 text-dark text-4xl sm:text-5xl tracking-tight font-semibold'>{heading}</p>
            <span className='text-base sm:text-base text-center text-zinc-500'>{text}</span>
        </div>
    </div>
  )
}