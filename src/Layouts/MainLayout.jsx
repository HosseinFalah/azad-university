import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../Common/Loading";
import { Navbar, Footer } from "../Components/index";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      
      <Suspense fallback={<Loading/>}>
        <Outlet/>
      </Suspense>
      
      <Footer/>
    </>
  )
}

export default MainLayout