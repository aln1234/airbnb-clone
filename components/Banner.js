import Image from "next/image"



function Banner() {
    return (
        <div   className="relative h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image src="https://links.papareact.com/0fm"
            layout="fill"
            objectFit="cover"
          
            />
            <div className="absolute top-1/2 w-full text-center">
                <p>Hellloooooooooooooooooooo</p>
                <button className="text-purple-500 bg-white px-12 py-4 border-2 shadow-md my-3 rounded-full hover:shadow-xl active:scale-90 transtition duration-150 ">Flexible</button>
            </div>
            
        </div>
    )
}

export default Banner
