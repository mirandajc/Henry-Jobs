import React from "react";



export default function Loading () {


    return(
        <div>
            <img src="https://acegif.com/wp-content/uploads/loading-25.gif"/>
        </div>
    )
}

// imp ort loading from "../images/gifCohete.png";
// import './Loading.css'

// export default function Loading({setLoading}){
//     return(
//         <div>
//              <div className="loading">
//                 <img className="imagenLoading" src={loading} alt='Loading'/>
//             </div>
//             <div>
//                 {setTimeout(() => {
//                 setLoading(false);
//                 }, 4000)}
//             </div>
//         </div>
//     )
// }