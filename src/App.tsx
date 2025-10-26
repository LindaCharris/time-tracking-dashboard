import { UserDetail, StatsContainer } from "./components";
 
function App() {

  return (
     <div className="flex justify-center items-center min-h-screen bg-Navy-950">
       <main className="w-[327px] md:w-[612px] flex flex-col gap-6 xl:flex-row xl:w-[1116px] my-10">
         <UserDetail />
         <StatsContainer />
       </main>
    </div>

  )
}

export default App
