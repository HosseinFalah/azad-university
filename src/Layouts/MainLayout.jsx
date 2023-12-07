import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Common/Loading";
import { Navbar, Footer } from "../Components/index";

const MainLayout = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Navbar/>
          
      <Outlet/>
          
      <Footer/>
    </Suspense>
  )
}

export default MainLayout