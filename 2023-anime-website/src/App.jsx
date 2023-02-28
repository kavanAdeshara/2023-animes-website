import { useState } from 'react'
import './App.css'
import InfoCard from './components/InfoCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='website-header'>
        <img src='../src/assets/logo.png' width='250' height='200'/>
        <h1> Upcoming Anime of 2023 </h1>
        <img src='../src/assets/logo2.png' width='250' height='200'/>
      </div>
      <div className='Anime-Cards'>
        <InfoCard 
          name="Giant Beasts of Ars"
          date="January, 2023"
          imgName="giant-beast-of-ars"
          trailerLink="https://www.youtube.com/watch?v=V169Gsf-3oY"
        />
        <InfoCard 
          name="Spy Classroom"
          date="January, 2023"
          imgName="spy-classroom"
          trailerLink="https://www.youtube.com/watch?v=DtmAaCqLjK0"
        />
        <InfoCard 
          name="Junji Ito Maniac"
          date="January, 2023"
          imgName="junji-ito-maniac"
          trailerLink="https://www.youtube.com/watch?v=A6dZKab7mRU"
        />
        <InfoCard 
          name="Solo Leveling"
          date="March, 2023"
          imgName="solo-leveling"
          trailerLink="https://www.youtube.com/watch?v=YvGSK8mIlt8"
        />
        <InfoCard 
          name="AOT: Season 4 Part 3"
          date="March, 2023"
          imgName="aot-season-4-part-3"
          trailerLink="https://www.youtube.com/watch?v=fRph5rtFiRQ"
        />
        <InfoCard 
          name="Mashle"
          date="April, 2023"
          imgName="mashle"
          trailerLink="https://www.youtube.com/watch?v=yGesp73vYEg"
        />
        <InfoCard 
          name="Demon Slayer: Season 3"
          date="April, 2023"
          imgName="demon-slayer-season-3"
          trailerLink="https://www.youtube.com/watch?v=43NGiNYIS6E"
        />
        <InfoCard 
          name="Edens Zero Season 2"
          date="April, 2023"
          imgName="edens-zero-season-2"
          trailerLink="https://www.youtube.com/watch?v=Os32bM9rnPk"
        />
        <InfoCard 
          name="My Home Hero"
          date="April, 2023"
          imgName="my-home-hero"
          trailerLink="https://www.youtube.com/watch?v=PrOvemF8Axo"
        />
        <InfoCard 
          name="Jujutsu Kaisen: Season 2"
          date="July, 2023"
          imgName="jjk-season-2"
          trailerLink="https://www.youtube.com/watch?v=N1lYe31b24E"
        />
      </div>
    </div>
  )
}

export default App
