import { useContext } from "react";
import { VideoContext } from "../context/videoContex";
import { ADD_VIDEO, DELETE_VIDEO, UPDATE_VIDEO } from "../reducers/videoReducer";

export const useVideoContext = () => {
    const { 
        videos,
        dispatch,
        modalOpen,
        setModalOpen,
        url,
    }  = useContext(VideoContext);

    function addVideo(video) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: ADD_VIDEO, payload: video });
            }
        })
        
    }

    function deleteVideo (id) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: DELETE_VIDEO, payload: id });
            }
        })
    }

    function updateVideo (id, video) {
        fetch(`${url}/${id}`, {
            method: 'PUT',  
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(video),
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: UPDATE_VIDEO, payload: {id: id ,video: video} });
            }
        })
    }

    return {
        videos,
        addVideo,
        deleteVideo,
        updateVideo,
        modalOpen,
        setModalOpen,
    };
}
