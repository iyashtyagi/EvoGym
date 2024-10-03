import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from '@/assets/Logo.png'
import Link, { PageLinkProps } from "./Link"
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";


type NavbarProps = Omit<PageLinkProps, "page"> & {
    isTopOfPage : boolean
};

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: NavbarProps) => {
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const navBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return <nav>
        <div className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}> {/* outer div */}
            <div className={`${flexBetween} mx-auto w-5/6`}> {/* inner navbardiv */}
                <div className={`${flexBetween} w-full gap-16`}> {/* content */}
                    {/* left side */}
                    <img alt="logo" src={Logo} />
                    {/* right side */}

                    {isAboveMediumScreen?(<div className={`${flexBetween} w-full`}>
                        {/* inner left sife */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>

                        {/* inner right side */}
                        <div className={`${flexBetween} gap-8 `}>
                            <p>Sign In</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                        </div>

                    </div>
                    ):<button className="rounded-full bg-secondary-500 p-2"
                        onClick={()=>{setMenuToggled(!isMenuToggled)}}
                    >
                        {<Bars3Icon  className="h-6 text-white"/>}
                    </button>}
                </div>
            </div>
        </div>
        
        {/* mobile menu modal */}
        {!isAboveMediumScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            <div className="flex justify-end p-10">
                <button onClick={()=>{setMenuToggled(!isMenuToggled)}}><XMarkIcon className="h-6 text-white"/></button>
            </div>

            {/* Menu items */} 
            <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
        </div>

        )}

    </nav>
}

export default Navbar;