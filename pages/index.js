import Head from 'next/head'
import Header from "../components/Header"

import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"

export default function Home({exploreData,cardsData}) {
  return (
    <div >
      <Head>
        <title>Air Bnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



    <Header/>
   {/* banner */}
   <Banner/>

   <main className="max-w-6xl mx-auto px-8 sm:px-16">
     <section className="pt-6">
       <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {exploreData?.map ((item) => (
        <SmallCard img={item.img} distance={item.distance} location={item.location} key={item.img}/>
       )
       )
      }
        
       </div>
      

     
     </section>
    
     <section>
     <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
     <div className="flex space-x-3 overflow-scroll scrollbar-hide ">
     {cardsData?.map ((item) => (
        <MediumCard img={item.img} title={item.title} key={item.img}/>
       )
       )
      }

     </div>

     </section>
     <LargeCard
     img="https://links.papareact.com/4cj"
     title="The Greatest Outdoors"
     description="The Greatest Outdoors"
     buttonText="Get Inspired"
    className=""/>

   </main>
 
    </div>
  )
}


export async function getStaticProps() {

  const exploreData = await fetch("https://links.papareact.com/pyp").
  then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").
  then(
    (res) => res.json()
  );

 

  return {
    props:{
      exploreData,
      cardsData,
    }
  }
}