import thirdImg from "../../../public/home/home-third-img.png"

const HomeThirdSection = () => {
  return (
    <div className="bg-secondary-light flex flex-col w-full h-auto py-14">
        <div className="home-section-container flex justify-between items-center">
            <p className="p-2 text-secondary-dark font-bold text-lg"><span className="py-2 px-1 bg-third-default mr-5"></span> Consoles</p>
            <p className="text-[#5A5C5A] w-[30%]">
                <span className="text-third-default">Xbox Series </span> 
                foi projetado para jogos do presente, do passado e futuro, oferecendo a maior performance do mercado
            </p>
        </div>
        <div className="home-section-container flex py-32 gap-24">
            <div className="flex flex-col items-center w-[40%] gap-8">
                <p className="home-third-section-text text-primary-dark text-center w-[60%]">FUTURO DOS JOGOS</p>
                <p className="py-1.5 bg-third-default w-16 skew-x-[-20deg]"></p>
                <button type="button"
                className="px-9 py-4 rounded-md bg-primary-dark font-bold text-white text-lg hover:bg-opacity-90 ease-linear transition-all">
                    Explore os consoles
                </button>
            </div>
            <div className="w-[70%]">
                <img src={thirdImg} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default HomeThirdSection