import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

export type PageLinkProps = {
    page : string;
    selectedPage : SelectedPage;
    setSelectedPage : (value : SelectedPage)=>void;
}

const Link = ({page,selectedPage,setSelectedPage}: PageLinkProps) => {
    const lowerCasePage = page.toLowerCase().replace(" ","") as SelectedPage ;
    return (
        <AnchorLink 
         className={`${selectedPage == lowerCasePage ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300 cursor-pointer`}
         href={`#${lowerCasePage}`} onClick={()=>setSelectedPage(lowerCasePage)} 
        >
            {page}
        </AnchorLink>
    )
}

export default Link