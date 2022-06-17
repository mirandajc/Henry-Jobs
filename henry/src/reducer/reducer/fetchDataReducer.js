import RootReducer from "./reducer";


const initialState={

};

const fetchDataReducer=(state= initialState, action)=>{
    switch(action.type){
        default:
            return{
                ...state
            }
    }
};

export default fetchDataReducer;