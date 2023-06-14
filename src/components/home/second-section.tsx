import haloImg from "../../../public/home/home-second-img.png"
import sectionData from "../../../public/home/second-section.json"
import HomeSecondSectionItem from "./second-section-item"

const HomeSecondSection = () => {
    return (
    <div className="bg-gradient-to-t from-primary-dark from-0% to-black to-10% flex flex-col w-full h-auto py-4">
        <div className="home-section-container flex justify-between items-center">
            <p className="p-2 text-white font-bold text-lg"><span className="py-2 px-1 bg-third-default mr-5"></span> Game Pass</p>
            <p className="text-secondary-light w-[30%]">Uma biblioteca com mais de 200 jogos disponíveis para você jogar seja pelo console ou pela nuvem</p>
        </div>
        <div className="home-section-container flex justify-between items-center py-32 gap-24">
            <img src={haloImg} alt="img" />
            <div className="grid grid-cols-2 w-[50%]">
                {sectionData.data.map(item =>
                    <HomeSecondSectionItem 
                    key={item.title}
                    title={item.title} 
                    description={item.description}
                    svg_d={item.svg_d}
                    />    
                )}
            </div>
        </div>
    </div>
    )
}

export default HomeSecondSection