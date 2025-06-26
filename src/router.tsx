import { Route, Routes } from "react-router"
import LoginPage from "./pages/auth/login/page"

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  )
}

export default MyRouter
