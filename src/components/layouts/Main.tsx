import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import '../controlledcomponents/component.css'
const Main = () => {
  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default Main
