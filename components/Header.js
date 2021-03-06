import Image from "next/image"

import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon} from "@heroicons/react/solid"



function Header() {
    return (
 <header className="sticky top-0 z-50 p-5 grid grid-cols-3 bg-white shadow-md md:px-10" >

     <div className="relative flex items-center h-10 cursor-pointer my-auto "> 
         
        <Image
        src={"https://Links.papareact.com/qd3"}
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        
        
        
        />
     </div>
     <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm " >

         <input type="text" className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 " placeholder="Start your search"/>
         <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor pointer md:mx-2"/>

     </div>
     <div className="flex items-center space-x-4 justify-end text-gray-400 ">
         <p className="hidden md:inline-flex">Become a Host</p>
         < GlobeAltIcon className="h-6 cursor-pointer"/>
         <div className="flex items-center space-x-2 md:border-2 rounded-full p-2">
             <MenuIcon className="h-6"/>
             <UserCircleIcon className="h-6"/>

         </div>
     </div>


 </header>
   

        
            
      
    )
}

export default Header
