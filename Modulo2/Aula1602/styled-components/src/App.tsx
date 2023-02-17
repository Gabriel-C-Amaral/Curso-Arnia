import PokemonList from "./components/PokemonList"
import { GlobalStyleLight } from "./globalStyle"
import Magnifier from "./assets/images/magnifier.png"
import ServiceCard from "./components/ServiceCard"

function App() {
  return (
    <div>
      <GlobalStyleLight />
      <ServiceCard
        img={Magnifier}
        title="Search doctor"
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
      />
      <PokemonList />
    </div>
  )
}

export default App
