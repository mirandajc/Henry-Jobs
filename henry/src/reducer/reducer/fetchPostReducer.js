import {
    POST_USER, POST_USER_SUCCESS,SET_LOGOUT,PROFILE_SUCCESS,

} from "../../constants/constants";

const initialState = {
    userResponse:[],
    response:[],
    responseProfile:[],
    log:false,

};

const fetchPostReducer = (state = initialState, action) => {
    switch (action.type) {
       /*  case GET_INFO_USER_SUCCES:
            return { 
                ...state,
                userRegister: action.payload
            }*/


            case PROFILE_SUCCESS:
                
                return{
                    ...state,
                    responseProfile: action.payload
                }

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
            case SET_LOGOUT:
                return{
                    ...state,
                    response: undefined

                }
        default: 
        return {
                ...state
            }
    }
};

export default fetchPostReducer;