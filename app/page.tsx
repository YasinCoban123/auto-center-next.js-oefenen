import Image from 'next/image'

import { CustomFilter, Hero, SearchBar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
  <div className="mt-12 padding-x padding-y max-width" id= "discover">
   <div className="home__text-container">
    <h1 className="text-4xl font-extrabold">Auto Collectie</h1>
    <p>Ontdek de autos die je leuk vind</p>
    </div> 
    <div className="home__filters">
      <SearchBar />

      <div className="home__filter-container">
        <CustomFilter title="Diesel"/>
        <CustomFilter title="Jaar"/>

      </div>
    </div>
  </div>
    </main>
  )
}
