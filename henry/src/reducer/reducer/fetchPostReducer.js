import {
    BUGG_NAV, POST_USER, POST_USER_SUCCESS,SET_LOGOUT,PROFILE_SUCCESS, SET_GOOGLE_USER, POST_REGISTER_MODAL_SUCCESS,SET_USERTYPE,SET_DEV_TYPE_AND_TECH, SET_LOCATION_ENG_STUDY, SET_RECRUITER_INFO,SET_BUSINESS_INFO,UPDATE_USER_SUCCESS

} from "../../constants/constants";

const initialState = {
    GOOGLEUSER: false, // ESTO ES DE GOOGLE
    userResponse:[],
    response:[],
    responseProfile:[],
    log: false,
    buggati: false,
    upDateProfile: {
        userTypes:'',
        country:'',
        city:'',
        languages:'',
        profileImage:{secure_url:''},
        otherStudies:[],
        currentJob:{name:'',date:'',job:''},
        backFront:'',
        technologies:[],
        cuit:''
    }
};

// AGREGAR FUNCION EN LOS ULTIMOS BOTONES DEL FORMULARIO QUE HAGA EL PUT EN EL BACK.

const fetchPostReducer = (state = initialState, action) => {
    switch (action.type) {
            case BUGG_NAV:
                return{
                    ...state,
                    buggati: !state.buggati
                }
            case UPDATE_USER_SUCCESS: 
                return{
                    ...state,
                     // ojo
                }
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
            
            case POST_REGISTER_MODAL_SUCCESS:
                return {
                    ...state,
                    response: action.payload
                }
            
            case SET_USERTYPE:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile, userTypes: action.payload}
                }

            case SET_DEV_TYPE_AND_TECH:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile, 
                        backFront: action.payload.backfront,
                        technologies: action.payload.technologies
                    }
                };
            
            case SET_LOCATION_ENG_STUDY:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile, 
                        country: action.payload.location.country,
                        city: action.payload.location.city,
                        languages: action.payload.languages,
                        otherStudies: action.payload.otherStudies
                    }
                };

            case SET_RECRUITER_INFO:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile,
                        currentJob:{
                            name:action.payload.enterprise, 
                            date:action.payload.antiguedad, 
                            job: action.payload.puesto
                        },
                        country: action.payload.location.country,
                        city: action.payload.location.city,
                        languages: action.payload.languages,
                        otherStudies: action.payload.study
                    }
                };

            case SET_BUSINESS_INFO:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile,
                        country: action.payload.location.country,
                        city: action.payload.location.city,
                        cuit: action.payload.cuit,
                        currentJob:{
                            date: action.payload.age
                        }
                }
            };

            case SET_GOOGLE_USER:
                return {
                    ...state,
                    GOOGLEUSER: action.payload
                }
            
        default: 
        return {
                ...state
            };
    }
};

export default fetchPostReducer;