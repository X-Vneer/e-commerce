import { Route, Routes } from "react-router"
import AuthLayout from "./pages/auth/layout"
import LoginPage from "./pages/auth/login/page"

const MyRouter = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default MyRouter
