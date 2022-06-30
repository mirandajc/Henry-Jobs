import {
    POST_USER, POST_USER_SUCCESS,

} from "../../constants/constants";

const initialState = {
    userResponse:[],
    response:[]

};

const fetchPostReducer = (state = initialState, action) => {
    switch (action.type) {
       /*  case GET_INFO_USER_SUCCES:
            return { 
                ...state,
                userRegister: action.payload
            }*/

            case POST_USER:
                return{
                    ...state,
                    userResponse: action.payload

                }
            case POST_USER_SUCCESS:
                return{
                    ...state,
                    response: action.payload
                }
        default: 
        return {
                ...state
            }
    }
};

export default fetchPostReducer;