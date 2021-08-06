import Image from "next/image"



function MediumCard({img,title}) {
 
    return (
        <div className=" items-center cursor-pointer space-x-8 rounded-xl hover:bg-gray-100 hover:scale-105 transtition transform duration-300 ease-out ">
             <div className="relative h-80 w-80">
            <Image src={img}
            layout="fill"
            className="rounded-lg"
            
            />
            
        </div>
        <div>
            <h2>{title}</h2>
          
            </div>

        </div>
       
   
    )
}

export default MediumCard
