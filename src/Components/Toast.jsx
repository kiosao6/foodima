



export const Toast = () => {
  return (

      <div className="flex !h-auto">
        <div className="flex ">
            <div className="w-[4px] rounded-full my-[8px] ml-[8px] bg-[#21A67A]"></div>
            <div className="m-5 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#21A67A" height="24" width="24">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                </svg>
            </div>
        </div>

        <div className="font-figtree flex justify-center flex-col">
            <p className="font-semibold text-base text-dark">Yay! everything worked!</p>
            <p className="text-sm text-zinc-600">Congrats on the internet loading your request.</p>
        </div>

        <div className="flex items-center">
            <button>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L7 17M7 7L17 17" stroke="#AAACB0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
  )
}