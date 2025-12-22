// import { useState } from 'react'

import KanbanBoard from "./pages/KanbanBoard/KanbanBoard"
import Column from "./components/Column"

function App() {

  return (
    <>
      <div className="h-screen bg-gray-200">
        <KanbanBoard />
        <Column />
      </div>
    </>
  )
}

export default App