
interface HomeSecondSectionItemProps {
    title: string
    description: string
    svg_d: string
}

const HomeSecondSectionItem = ({ title, description, svg_d }:HomeSecondSectionItemProps) => {
    return (
    <div className="flex gap-4 my-12 mx-2">
        <p className="bg-primary-dark rounded w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[50%] h-[50%]">
                <path d={svg_d} fill="#F5FAF5"/>
            </svg>
        </p>
        <p className="text-left w-60 text-lg text-white font-semibold flex flex-col">
            {title}
            <span className="text-secondary-default text-base">
                {description}
            </span>
        </p>
    </div>
    )
}

export default HomeSecondSectionItem