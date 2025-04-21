import Random from "./components/Random"
import Tag from "./components/Tag"
import Credits from "./components/Credits"
export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background relative items-center">
      <h1 className="bg-white rounded-lg  text-center mt-[40px] px-10 py-2 text-4xl font-bold w-11/12">RANDOM GIFS GENERATOR</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] overflow-auto">
        <Random/>
        <Tag/>
        <Credits/>
      </div>
    </div>
  ) 
}