import { GET_INFO_FOR_STAFF_SUCCESS, GET_STUDENT_DETAIL, STAFF_ORDER_STUDENTS } from "../../constants/constants";


const initialState = {
    staffAllStudents:[],
    staffAllBusiness:[],
    staffAllStudentsPublications:[],
    staffAllBusinessPublications:[],
    staffStudentDetail:[],
    staffStudentOrder:""
};

// si no cumple con la cantidad de envios de CV que se le notifique automaticamente al alumno
// como desactivar esta funcionalidad? => ejemplo: el alumno consigue trabajo

const fetchStaffReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_INFO_FOR_STAFF_SUCCESS:

            let StudentUser = action.payload.users.filter(e => e.userTypes === 1 || e.userTypes === 2);
            let BusinessUser = action.payload.users.filter(e => e.userTypes === 4 || e.userTypes === 5);
            let StudentPub = action.payload.publications.filter(e => e.posterUser.userTypes === 1 || e.posterUser.userTypes === 2);
            let BusinessPub = action.payload.publications.filter(e => e.posterUser.userTypes === 4 || e.posterUser.userTypes === 5);
            console.log("reducer", StudentUser);
            return {
                ...state,
                staffAllStudents: StudentUser,
                staffAllBusiness: BusinessUser,
                staffAllStudentsPublications: StudentPub,
                staffAllBusinessPublications: BusinessPub,
                staffStudentDetail: StudentUser
            };

        case STAFF_ORDER_STUDENTS: 

            return {
                ...state,
                staffStudentOrder: action.payload
            };

        case GET_STUDENT_DETAIL:

            if(action.payload !== ""){
                let studentSearch = state.staffAllStudents.filter(e => {
                    let nombre = e.name + " " + e.lastname;
                    nombre = nombre.toLowerCase();
                    let busqueda = action.payload.toLowerCase();
                for(let i = 0; i < busqueda.length; i++){
                    if(nombre[i] !== busqueda[i]){
                        return;
                    }
                    else{
                        return e
                    }
                }
            });
            if(state.staffStudentOrder === ""){

                return {
                    ...state,
                    staffStudentDetail: studentSearch
                };
            }
            else if(state.staffStudentOrder === "CV enviado ascendente"){
                studentSearch = studentSearch.sort((a, b) => {
                    if(a.curriculumCounter < b.curriculumCounter) return -1;
                    if(b.curriculumCounter < a.curriculumCounter) return 1;
                    return 0;
                });

                return {
                    ...state,
                    staffStudentDetail: studentSearch
                };
            }
            else if(state.staffStudentOrder === "CV enviado descendente"){
                studentSearch = studentSearch.sort((a, b) => {
                    if(a.curriculumCounter < b.curriculumCounter) return -1;
                    if(b.curriculumCounter < a.curriculumCounter) return 1;
                    return 0;
                });

                studentSearch = studentSearch.reverse();

                return {
                    ...state,
                    staffStudentDetail: studentSearch
                };
            }
            else if(state.staffStudentOrder === "Stars ascendente"){
                studentSearch = studentSearch.sort((a, b) => {
                    if(a.stars < b.stars) return -1;
                    if(b.stars < a.stars) return 1;
                    return 0;
                });
                return {
                    ...state,
                    staffStudentDetail: studentSearch
                };
            }
            else if(state.staffStudentOrder === "Stars descendente"){
                studentSearch = studentSearch.sort((a, b) => {
                    if(a.stars < b.stars) return -1;
                    if(b.stars < a.stars) return 1;
                    return 0;
                });

                studentSearch = studentSearch.reverse();

                return {
                    ...state,
                    staffStudentDetail: studentSearch
                };
            }
        }
        else{
            let Todos = state.staffAllStudents
            if(state.staffStudentOrder === ""){
                
                return {
                    ...state,
                    staffStudentDetail: state.staffAllStudents
                };
            }
            else if(state.staffStudentOrder === "CV enviado ascendente"){
                Todos = Todos.sort((a, b) => {
                    if(a.curriculumCounter < b.curriculumCounter) return -1;
                    if(b.curriculumCounter < a.curriculumCounter) return 1;
                    return 0;
                });

                return {
                    ...state,
                    staffStudentDetail: Todos
                };
            }
            else if(state.staffStudentOrder === "CV enviado descendente"){
                Todos = Todos.sort((a, b) => {
                    if(a.curriculumCounter < b.curriculumCounter) return -1;
                    if(b.curriculumCounter < a.curriculumCounter) return 1;
                    return 0;
                });

                Todos = Todos.reverse();
                console.log(Todos)

                return {
                    ...state,
                    staffStudentDetail: Todos
                };
            }
            else if(state.staffStudentOrder === "Stars ascendente"){
                Todos = Todos.sort((a, b) => {
                    if(a.stars < b.stars) return -1;
                    if(b.stars < a.stars) return 1;
                    return 0;
                });

                return {
                    ...state,
                    staffStudentDetail: Todos
                };
            }
            else if(state.staffStudentOrder === "Stars descendente"){
                Todos = Todos.sort((a, b) => {
                    if(a.stars < b.stars) return -1;
                    if(b.stars < a.stars) return 1;
                    return 0;
                });

                Todos = Todos.reverse();

                return {
                    ...state,
                    staffStudentDetail: Todos
                };
            }
        }

        default:
            return {
                ...state
            };
    };
};

export default fetchStaffReducer;

