import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { videoReducer } from "@/reducers/videoReducer";

const VideoContext = createContext();
VideoContext.displayName = "Videos";

function VideoProvider({ children }) {
    const [videos, dispatch] = useReducer( videoReducer, []);
    const [modalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:8080/videos")
            .then((response) => response.json())
            .then((data) => dispatch({ type: "SET_VIDEOS", payload: data }));
    }, [])
    

    return (
        <VideoContext.Provider value={{ videos, dispatch, modalOpen, setModalOpen }}>
            {children}
        </VideoContext.Provider>
    )
}

export { VideoProvider, VideoContext }