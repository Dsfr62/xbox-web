import Navbar from "../components/global/navbar"
import imgPath from "../../public/home/home-background.png"

const Home = () => {
    return (
        <div className="flex flex-col bg-cover h-screen w-full" style={{ backgroundImage: `url(${imgPath})` }} >
            <Navbar />
        </div>
    )
}

export default Home