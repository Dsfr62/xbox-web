import navLogo from "../../../../public/main/nav-logo.png"
import { HiArrowRight } from "react-icons/hi"

const Navbar = () => {
    return (
        <div className="w-full h-20 flex justify-between px-2 xl:px-8 border-b border-secondary-light border-opacity-10 max-w-[1440px] mx-auto">
            <div className="w-[20%] border-b-2 border-primary-default flex items-center pl-8 xl:pl-16">
                <img src={navLogo} alt="xbox-img" className="cursor-pointer hover:animate-pulse ease-linear transition-all" />
            </div>
            <div className="flex items-center w-[60%] pl-6">
                <p className="text-white px-6 text-center xl:px-12 cursor-pointer hover:text-primary-default ease-linear transition-all">Game Pass</p>
                <p className="text-white px-6 text-center xl:px-12 cursor-pointer hover:text-primary-default ease-linear transition-all">Consoles</p>
                <p className="text-white px-6 text-center xl:px-12 cursor-pointer hover:text-primary-default ease-linear transition-all">Meu Xbox</p>
                <p className="text-white px-6 text-center xl:px-12 cursor-pointer hover:text-primary-default ease-linear transition-all">Comunidade</p>
            </div>
            <div className="flex items-center w-[20%] justify-center gap-2">
                <p className="text-center underline text-primary-default cursor-pointer hover:animate-pulse ease-linear transition-all flex items-center gap-2 truncate">
                    Explorar novidades Xbox
                    <HiArrowRight size={24} />
                </p>
            </div>
        </div>
    )
}

export default Navbar