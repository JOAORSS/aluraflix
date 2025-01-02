export const SET_VIDEOS = 'SET_VIDEOS';
export const ADD_VIDEO = 'ADD_VIDEO';
export const DELETE_VIDEO = 'DELETE_VIDEO';
export const UPDATE_VIDEO = 'UPDATE_VIDEO';


export const videoReducer = (state, action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return action.payload;
        case ADD_VIDEO:
            return [...state, action.payload];
        case DELETE_VIDEO:
            return state.filter((video) => video.id !== action.payload);
        case UPDATE_VIDEO:
            return state.map((video) => {
                if (video.id === action.payload.id) {
                    return action.payload.video;
                }
                return video;
            });
        default:
            return state;
    }
}