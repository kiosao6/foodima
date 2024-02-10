

import { Drawer } from "vaul";
import { useEffect } from "react";
import { useState } from "react";
import { SidebarMobile } from "../Main/Components/SidebarMobile";

export function MyDrawer() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    
    const menu = document.querySelector('.menu');
  
    if(isOpen){
      menu.classList.add('!hidden')
    } else {
      setTimeout(() => {
        menu.classList.remove('!hidden')
      }, 501);
    }

  }, [isOpen])
  
  

  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger asChild>
        <button className="flex bg-zinc-100 h-14 px-5 sm:px-8 text-sm rounded-xl items-center justify-center gap-1 max-w-40 lg:hidden text-dark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.38589 5.66687C2.62955 4.82155 2.25138 4.39889 2.23712 4.03968C2.22473 3.72764 2.35882 3.42772 2.59963 3.22889C2.87684 3 3.44399 3 4.57828 3H19.4212C20.5555 3 21.1227 3 21.3999 3.22889C21.6407 3.42772 21.7748 3.72764 21.7624 4.03968C21.7481 4.39889 21.3699 4.82155 20.6136 5.66687L14.9074 12.0444C14.7566 12.2129 14.6812 12.2972 14.6275 12.3931C14.5798 12.4781 14.5448 12.5697 14.5236 12.6648C14.4997 12.7721 14.4997 12.8852 14.4997 13.1113V18.4584C14.4997 18.6539 14.4997 18.7517 14.4682 18.8363C14.4403 18.911 14.395 18.9779 14.336 19.0315C14.2692 19.0922 14.1784 19.1285 13.9969 19.2012L10.5969 20.5612C10.2293 20.7082 10.0455 20.7817 9.89802 20.751C9.76901 20.7242 9.6558 20.6476 9.583 20.5377C9.49975 20.4122 9.49975 20.2142 9.49975 19.8184V13.1113C9.49975 12.8852 9.49975 12.7721 9.47587 12.6648C9.45469 12.5697 9.41971 12.4781 9.37204 12.3931C9.31828 12.2972 9.2429 12.2129 9.09213 12.0444L3.38589 5.66687Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-2xl mx-6 h-[60%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mt-4 mb-8" />
            <SidebarMobile action={setIsOpen} display='block' />
        
          </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}