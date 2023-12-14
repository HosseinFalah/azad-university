import { Banner, Category, LastedCourses } from "../../Components";
import LastedArticles from "../../Components/LastedArticles/LastedArticles";

const Home = () => {
    return (
        <main>
            <Banner/>
            <Category/>
            <LastedCourses/>
            <LastedArticles/>
        </main>
    )
}

export default Home