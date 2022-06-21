import React from "react";
import { VerticalDiv } from "../../LandingStyles/vertiNav";
import {FaCode,FaCommentAlt} from 'react-icons/fa'
import {BiBomb} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'


export default function VertiNav(){
    return(
        <VerticalDiv>
            <FaCode/>
            <FaCommentAlt/>
            <BiBomb/>
            <BsBook/>
        </VerticalDiv>
    )
}