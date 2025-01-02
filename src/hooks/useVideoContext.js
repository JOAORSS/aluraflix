import { useContext } from "react";
import { VideoContext } from "../context/videoContex";
import { ADD_VIDEO, DELETE_VIDEO, UPDATE_VIDEO } from "../reducers/videoReducer";

export const useVideoContext = () => {
    const { 
        videos,
        dispatch,
        modalOpen,
        setModalOpen,
    }  = useContext(VideoContext);

    function addVideo(video) {
        fetch(`http://localhost:8080/videos`, {
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
        fetch(`http://localhost:8080/videos/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: DELETE_VIDEO, payload: id });
            }
        })
    }

    function updateVideo (id, video) {
        fetch(`http://localhost:8080/videos/${id}`, {
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
