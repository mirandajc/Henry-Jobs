import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { getInfoForStaff, getStudentDetail } from "../../../reducer/actions/actionStaff";

export default function StaffStudentsBusiness ({lastname}){
    const alumnos = ""
    const empresa = ""
    return(
        <div>
            {
                lastname ?  alumnos : empresa
            }
        </div>
    );
};