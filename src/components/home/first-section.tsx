import Navbar from "../global/navbar"
import imgPath from "../../../public/home/home-background.png"

const HomeFirstSection = () => {
    return (
    <div className="flex flex-col bg-cover h-screen w-full" style={{ backgroundImage: `url(${imgPath})` }} >
        <Navbar />
        <div className="home-section-container">
            <p className="uppercase text-primary-default font-bold text-sm w-fit">Venha conhecer o xbox</p>
            <p className="text-5xl xl:text-7xl uppercase text-white font-bold w-[50%] xl:w-[45%] mt-3 xl:mt-4">Power Your Dreams</p>
            <p className="text-sm w-[30%] text-white mt-8 xl:mt-10">Com o Xbox, você tem acesso a bibliotecas gigantescas de jogos, jogos na nuvem para jogar onde e quando quiser, os consoles mais poderosos disponíveis no mercado.</p>
            <button type="button"
            className="py-4 xl:py-5 text-white bg-primary-default rounded-[3px] font-bold w-[20%] mt-10 xl:mt-14 text-xl hover:bg-opacity-80 ease-linear transition-all"
            >
                Saiba mais
            </button>
        </div>
    </div>
    )
}

export default HomeFirstSection