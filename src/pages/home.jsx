import Categoria from "../components/categoria";
import { useVideoContext } from "@/hooks/useVideoContext";
import ModalEditar from "../components/modalEditar";
import Destaque from "../components/destaque";

export default function Home() {
    const { videos } = useVideoContext();

    function hasVideosWithTag (tag) {return videos.some((video) => video.tag === tag);}

    return(
        <>
            <Destaque />

                {hasVideosWithTag("frontend") && <Categoria tag="frontend" />}
                {hasVideosWithTag("backend") && <Categoria tag="backend" />}
                {hasVideosWithTag("mobile") && <Categoria tag="mobile" />}

            <ModalEditar />
        </>
    )
}