import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Layout/Layout"
import Home from "./pages/home/Home"
import NotFound from "./pages/notFound/NotFound"
import Details from "./pages/details/Details"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
