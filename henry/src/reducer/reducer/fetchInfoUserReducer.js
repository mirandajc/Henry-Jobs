import { GET_INFO_USER_SUCCESS } from "../../constants/constants";

const initialState = {
    userType:"",
    premium: false
};

const fetchInfoUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO_USER_SUCCESS:
            return {
                ...state,
                userType: action.payload.userType,
                premium: action.payload.premium
            };

        default:
        return {
                ...state
            };
    }
};

export default fetchInfoUserReducer;