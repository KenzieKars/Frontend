import { Routes, Route } from "react-router"
import HomePage from "../pages/HomePage"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"




export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

        </Routes>
    )
}
