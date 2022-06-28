import {

} from "../../constants/constants";

const initialState = {

};

const fetchInfoUserReducer = (state = initialState, action) => {
    switch (action.type) {
        /* case GET_INFO_USER_SUCCES:
            return { 
                ...state,
                userRegister: action.payload
            } */
        default:
        return {
                ...state
            }
    }
};

export default fetchInfoUserReducer;