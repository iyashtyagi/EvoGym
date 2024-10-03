// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from '@/assets/Logo.png'
import Link, { PageLinkProps } from "./Link"


type NavbarProps = Omit<PageLinkProps, "page">;

const Navbar = ({selectedPage, setSelectedPage}: NavbarProps) => {
    const flexBetween = "flex items-center justify-between"

    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}> {/* outer div */}
            <div className={`${flexBetween} mx-auto w-5/6`}> {/* inner navbardiv */}
                <div className={`${flexBetween} w-full gap-16`}> {/* content */}
                    {/* left side */}
                    <img alt="logo" src={Logo} />
                    {/* right side */}
                    <div className={`${flexBetween} w-full`}>
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
                            <p>Become a Member</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;