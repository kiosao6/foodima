



export const Location = ({location = 'Venezuela', ingredients = '7'}) => {
  return (

    <>
    <div className="flex gap-12 mt-16 lg:mt-12 lg:flex-col lg:gap-8">
        <div className="flex gap-x-3">
            <svg className="" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex flex-col gap-y-1">
                <span className="uppercase tracking-widest text-xs text-zinc-600 font-semibold">Origin</span>
                <span className="text-zinc-600">{location}</span>
            </div>
        </div>
        <div className="flex gap-x-3">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.0282 3.0004C23.2792 3.00736 23.507 3.10676 23.6789 3.26577C23.7021 3.28719 23.7241 3.30961 23.745 3.33294C23.9078 3.5148 24 3.75183 24 4.00001V17C24 17.0565 23.9953 17.112 23.9863 17.1659C25.1586 17.5739 26 18.6887 26 20V26C26 27.6569 24.6569 29 23 29C21.3431 29 20 27.6569 20 26V20C20 18.6887 20.8414 17.5739 22.0137 17.1659C22.0047 17.112 22 17.0565 22 17V13.7808L21.0299 13.5382C19.2492 13.0931 18 11.4932 18 9.65768V7.34234C18 5.50687 19.2492 3.90694 21.0299 3.46177L22.7357 3.03531C22.81 3.01499 22.8878 3.00304 22.9679 3.00051C22.9881 2.99987 23.0082 2.99983 23.0282 3.0004ZM22 5.28079L21.5149 5.40205C20.6246 5.62464 20 6.4246 20 7.34234V9.65768C20 10.5754 20.6246 11.3754 21.5149 11.598L22 11.7192V5.28079ZM23 19C22.4477 19 22 19.4477 22 20V26C22 26.5523 22.4477 27 23 27C23.5523 27 24 26.5523 24 26V20C24 19.4477 23.5523 19 23 19Z" fill="#a1a1aa"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4.00001C8 3.44772 7.55228 3.00001 7 3.00001C6.44772 3.00001 6 3.44772 6 4.00001V8.00001C6 9.65686 7.34315 11 9 11V17C9 17.0565 9.00469 17.112 9.0137 17.1659C7.84135 17.5739 7 18.6887 7 20V26C7 27.6569 8.34315 29 10 29C11.6569 29 13 27.6569 13 26V20C13 18.6887 12.1586 17.5739 10.9863 17.1659C10.9953 17.112 11 17.0565 11 17V11C12.6569 11 14 9.65686 14 8.00001V4.00001C14 3.44772 13.5523 3.00001 13 3.00001C12.4477 3.00001 12 3.44772 12 4.00001V8.00001C12 8.55229 11.5523 9.00001 11 9.00001V4.00001C11 3.44772 10.5523 3.00001 10 3.00001C9.44772 3.00001 9 3.44772 9 4.00001V9.00001C8.44772 9.00001 8 8.55229 8 8.00001V4.00001ZM9 20C9 19.4477 9.44772 19 10 19C10.5523 19 11 19.4477 11 20V26C11 26.5523 10.5523 27 10 27C9.44772 27 9 26.5523 9 26V20Z" fill="#a1a1aa"/>
            </svg>
            <div className="flex flex-col gap-y-1">
                <span className="uppercase tracking-widest text-xs text-zinc-600 font-semibold">Ingredients</span>
                <span className="text-zinc-600">{ingredients}</span>
            </div>
        </div>
    </div>
    
    </>

  )
}