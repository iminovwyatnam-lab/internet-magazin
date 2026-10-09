import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout/Layout"
import Home from "./components/pages/home/Home"
import NotFound from "./components/pages/notFound/NotFound"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
