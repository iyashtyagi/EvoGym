import { useEffect, useState } from "react"

export default function useMediaQuery(query : string){
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(()=>{
        const media = window.matchMedia(query);
        console.log("Media:\n",media);
        if(media.matches !== matches){
            setMatches(media.matches);
        }
        const listner = () => setMatches(media.matches);
        window.addEventListener("resize",listner);

        return ()=> window.addEventListener("resize",listner);
        
    },[query,matches]);

    return matches;
}