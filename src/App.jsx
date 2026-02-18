import ResultGrid from "./components/ResultGrid"
import SearchBar from "./components/SearchBar"
import Tabs from "./components/Tabs"

const App = () => {

  return (
    <div className='min-h-screen w-full flex bg-[#94a811] items-center justify-center'>
      <SearchBar></SearchBar>

      <Tabs></Tabs>

      <ResultGrid></ResultGrid>
    </div>
  )
}

export default App