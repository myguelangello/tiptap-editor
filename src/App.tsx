import { Editor } from "./components/Editor"

function App() {
  return (
    <div className="min-h-screen p-8  text-zinc-900 dark:text-zinc-50 dark:bg-zinc-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="bg-white dark:bg-zinc-800 w-[1110px] mx-auto rounded-xl min-h-[720px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 dark:bg-zinc-900 border-r  border-r-zinc-100 dark:border-r-zinc-700 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
          <div className="flex mt-4 pl-2 bg-zinc-700 w-full h-[200px] rounded-md">
            <h3 className="text-zinc-300 font-medium text-lg">Texto de resposta</h3>
            <div>

            </div>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}

export default App
