import { useEffect } from "react";

export const Topscroll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);   // to make the page always load from the top
    }, []);
    
    return null;
}

