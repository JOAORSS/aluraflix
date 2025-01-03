import Categoria from "../components/categoria";
import { useVideoContext } from "@/hooks/useVideoContext";
import ModalEditar from "../components/modalEditar";
import Destaque from "../components/destaque";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";


export default function Home() {
    const { videos } = useVideoContext();

    const leyoutMobile = useMediaQuery({maxWidth: 859}); 


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function hasVideosWithTag (tag) {return videos.some((video) => video.tag === tag);}

    return(
        <>
            {!leyoutMobile && <Destaque />}

                {hasVideosWithTag("frontend") && <Categoria tag="frontend" />}
                {hasVideosWithTag("backend") && <Categoria tag="backend" />}
                {hasVideosWithTag("mobile") && <Categoria tag="mobile" />}

            <ModalEditar />
        </>
    )
}